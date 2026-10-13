# frozen_string_literal: true

module Kubik
  class NavigationItem < ActiveRecord::Base
    LISTING_FORM_VALUE = "__index__"
    ROUTABLE_TYPES = %w[resource].freeze
    CACHE_VERSION_KEY = "kubik/navigation/cache_version"

    self.table_name = "kubik_navigation_items"

    attr_accessor :listing_selected

    if table_exists?
      {
        resource_id: :integer,
        resource_scope: :string,
        nested_routes: :boolean,
        controller_params: :json,
        path_param_keys: :json
      }.each do |name, type|
        attribute name, type unless column_names.include?(name.to_s)
      end
    end

    validates :title, presence: true
    validates :title, uniqueness: true, if: -> { ancestry.nil? }
    validates :slug, presence: true, unless: -> { header? || link? || ancestry.nil? }
    validates :resource_type, presence: true, unless: -> { header? || node? || link? || ancestry.nil? }
    validates :controller, :action, presence: true, if: -> { resource? }
    validates :slug, uniqueness: { scope: :ancestry }, unless: -> { ancestry.nil? || header? || link? }
    validate :uri_unique_among_routable, if: :routable?

    acts_as_list scope: [:ancestry]
    has_ancestry(orphan_strategy: :adopt)

    before_validation :finalise_item
    before_validation :sync_params_payload
    after_save :update_uri_tree
    after_save :ensure_item_canonical
    after_commit :bust_navigation_cache

    if defined?(Kubik::Uploadable)
      include Kubik::Uploadable
      has_one_kubik_upload(self, :navigation_image)
    end

    scope :routable, -> { where(item_type: ROUTABLE_TYPES) }
    scope :resource_records, -> { where(item_type: "resource").where.not(action: "index") }
    scope :listings, -> { where(item_type: "resource", action: "index") }

    def self.cache_version
      Rails.cache.read(CACHE_VERSION_KEY).to_i
    end

    def self.bust_cache!
      Rails.cache.write(CACHE_VERSION_KEY, cache_version + 1)
    end

    def self.upgrade_columns?
      table_exists? && column_names.include?("resource_id")
    end

    def self.uri_candidates(path)
      slash = Kubik::NavigationResolver.normalize(path)
      return [slash] if slash.blank? || slash == "/"

      bare = slash.delete_prefix("/")
      [slash, bare, "#{slash}/"].uniq
    end

    def self.find_routable_by_uri(path)
      routable.where(uri: uri_candidates(path)).order(:id).first
    end

    def self.find_listing_by_uri(path)
      listings.where(uri: uri_candidates(path)).order(:id).first
    end

    def self.for_resource(record)
      for_resource_id(record.class.name, record.id)
    end

    def self.for_resource_id(type, id)
      rel = resource_records.where(resource_type: type)
      sid = id.to_s
      if upgrade_columns?
        rel.where("resource_id = :id OR params->>'id' = :sid", id: id, sid: sid)
      else
        rel.where("params->>'id' = ?", sid)
      end
    end

    def header?
      item_type == "header"
    end

    def link?
      item_type == "link"
    end

    def node?
      item_type == "node"
    end

    def resource?
      item_type == "resource"
    end

    def listing?
      resource? && action.to_s == "index"
    end

    def routable?
      resource?
    end

    def item_params
      (self[:params].presence || {}).with_indifferent_access
    end

    def nested_routes?
      raw = if has_attribute?(:nested_routes) && !self[:nested_routes].nil? && column_available?("nested_routes")
              self[:nested_routes]
            else
              item_params[:nested_routes]
            end
      ActiveModel::Type::Boolean.new.cast(raw)
    end

    def path_param_keys_list
      keys = if column_available?("path_param_keys") && self[:path_param_keys].present?
               self[:path_param_keys]
             else
               item_params[:path_param_keys]
             end
      Array(keys).map(&:to_s).reject(&:blank?)
    end

    def baked_controller_params
      raw = if column_available?("controller_params") && self[:controller_params].present?
              self[:controller_params]
            else
              item_params[:controller] || item_params[:controller_params]
            end
      (raw.presence || {}).stringify_keys
    end

    def effective_resource_id
      return nil if listing?

      if column_available?("resource_id") && self[:resource_id].present?
        return self[:resource_id]
      end

      id_val = item_params[:id]
      return nil if id_val.blank? || id_val.to_s == LISTING_FORM_VALUE

      id_val
    end

    def effective_resource_scope
      if column_available?("resource_scope") && self[:resource_scope].present?
        self[:resource_scope]
      else
        item_params[:kubik_scope]
      end
    end

    def resource
      klass = resource_type&.safe_constantize
      return nil if klass.blank?

      rid = effective_resource_id
      if rid.present?
        return klass.find_by(id: rid)
      end

      resource_from_uri_slug(klass)
    end

    def canonical?
      ActiveModel::Type::Boolean.new.cast(item_params[:canonical])
    end

    def canonical
      canonical?
    end

    def canonical=(value)
      merge_item_param("canonical", ActiveModel::Type::Boolean.new.cast(value))
    end

    def url
      return link_location if link?
      return nil if header?

      stored = uri.presence
      return stored if stored.blank?

      stored.start_with?("/") ? stored : "/#{stored}"
    end

    def visible?
      return true if header? || node? || link?
      return true if listing?

      resource_visible?
    end

    def resource_visible?
      return true if listing?

      record = resource
      return legacy_routable_resource? if record.nil?

      return record.published? if record.respond_to?(:published?)

      true
    end

    def root_title
      root.title
    end

    def material_icon
      case item_type
      when "resource"
        listing? ? "summarize" : "draft"
      when "link"
        "link"
      when "node"
        "subdirectory_arrow_right"
      when "header"
        "label"
      end
    end

    def node_type
      case item_type
      when "resource"
        listing? ? "#{resource_type.to_s.pluralize} listing" : resource_type
      when "link"
        "Link"
      when "redirect"
        "Redirect"
      when "header"
        "Header"
      when "node"
        "Node"
      end
    end

    def computed_uri
      slugs = path.map(&:slug).delete_if(&:blank?)
      return "" if slugs.empty?

      "/#{slugs.join('/')}"
    end

    def path_param_keys_text
      path_param_keys_list.join(", ")
    end

    def path_param_keys_text=(value)
      list = value.to_s.split(/[,\s]+/).reject(&:blank?)
      self.path_param_keys = list if has_attribute?(:path_param_keys)
      merge_item_param("path_param_keys", list)
    end

    def controller_params_text
      baked_controller_params.to_json
    end

    def controller_params_text=(value)
      parsed = value.present? ? JSON.parse(value) : {}
      self.controller_params = parsed if has_attribute?(:controller_params)
      merge_item_param("controller_params", parsed)
    rescue JSON::ParserError
      merge_item_param("controller_params", {})
    end

    def resource_picker
      listing? || @listing_selected ? LISTING_FORM_VALUE : effective_resource_id
    end

    def resource_picker=(value)
      if value.to_s == LISTING_FORM_VALUE
        @listing_selected = true
        self.resource_id = nil if has_attribute?(:resource_id)
        self.action = "index"
      else
        @listing_selected = false
        self.resource_id = value.presence if has_attribute?(:resource_id)
        self.action = "show" if value.present?
        merge_item_param("id", value.presence)
      end
    end

    def resource_scope
      effective_resource_scope
    end

    def resource_scope=(value)
      write_upgrade_attribute(:resource_scope, value)
      merge_item_param("kubik_scope", value)
    end

    def nested_routes=(value)
      write_upgrade_attribute(:nested_routes, value)
      merge_item_param("nested_routes", ActiveModel::Type::Boolean.new.cast(value))
    end

    private

    def column_available?(name)
      self.class.column_names.include?(name.to_s)
    end

    def resource_from_uri_slug(klass)
      return nil if listing? || uri.blank?

      segment = uri.to_s.delete_prefix("/").split("/").reject(&:blank?).last
      return nil if segment.blank?

      if klass.respond_to?(:friendly)
        klass.friendly.find(segment)
      elsif klass.column_names.include?("slug")
        klass.find_by(slug: segment)
      end
    rescue ActiveRecord::RecordNotFound
      nil
    end

    def legacy_routable_resource?
      resource? && uri.present? && controller.present?
    end

    def write_upgrade_attribute(name, value)
      return unless has_attribute?(name)

      self[name] = value
    end

    def merge_item_param(key, value)
      payload = item_params.merge(key => value)
      self[:params] = payload
    end

    def uri_unique_among_routable
      return if uri.blank?

      clash = self.class.routable.where(uri: self.class.uri_candidates(uri))
      clash = clash.where.not(id: id) if persisted?
      errors.add(:uri, "has already been taken") if clash.exists?
    end

    def update_uri_tree
      new_uri = computed_uri
      update_column(:uri, new_uri) if uri != new_uri
      children.each { |child| child.send(:update_uri_tree) }
    end

    def ensure_item_canonical
      return unless resource? && !listing?
      return if canonical?

      others = self.class.for_resource_id(resource_type, effective_resource_id).where.not(id: id)
      return if others.any? { |item| item.canonical? }

      merge_item_param("canonical", true)
      update_column(:params, self[:params])
    end

    def bust_navigation_cache
      self.class.bust_cache!
    end

    def finalise_item
      unless resource?
        self.controller = nil
        self.action = nil
        return
      end

      navigable_resource = Kubik::NavigableResources.instance.find_class(resource_type)
      return unless navigable_resource

      self.controller = navigable_resource.controller
      listing = @listing_selected ||
                effective_resource_id.blank? && action.to_s == "index" ||
                item_params[:id].to_s == LISTING_FORM_VALUE
      if listing
        self.action = "index"
        self.resource_id = nil if has_attribute?(:resource_id)
        merge_item_param("id", LISTING_FORM_VALUE)
      else
        self.action = "show"
        merge_item_param("id", effective_resource_id)
      end
    end

    def sync_params_payload
      payload = item_params.merge(
        "id" => listing? ? LISTING_FORM_VALUE : effective_resource_id,
        "kubik_scope" => effective_resource_scope,
        "nested_routes" => nested_routes?,
        "path_param_keys" => path_param_keys_list,
        "controller_params" => baked_controller_params
      )
      payload["canonical"] = true if canonical?
      self[:params] = payload
    end
  end
end
