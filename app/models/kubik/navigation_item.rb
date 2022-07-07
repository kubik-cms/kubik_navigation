module Kubik
  class NavigationItem < ActiveRecord::Base
    LISTING_FORM_VALUE = '__index__'
    self.table_name = 'kubik_navigation_items'
    attr_accessor :resource_id
    validates_presence_of :slug, unless: -> { item_type == 'header' || item_type == 'link' || ancestry.nil? }
    validates_uniqueness_of :slug, scope: :ancestry, unless: -> { ancestry.nil? || item_type == 'header' || item_type == 'link' }
    validates_uniqueness_of :title, if: -> { ancestry.nil? }
    validates_presence_of :title
    validates_presence_of :controller, :action, if: -> { item_type == 'resource' }
    acts_as_list scope: [:ancestry]
    has_ancestry(orphan_strategy: :adopt)
    after_save :update_uri_details
    before_validation :finalise_item

    def material_icon
      case item_type
      when 'resource'
        if action == 'index'
          "summarize"
        else
          "draft"
        end
      when 'link'
        "link"
      when 'node'
        "subdirectory_arrow_right"
      when 'header'
        "label"
      end
    end

    def node_type
      case item_type
      when 'resource'
        if action == 'index'
          "#{resource_type.pluralize()} listing"
        else
          resource_type
        end
      when 'link'
        "Link"
      when 'redirect'
        "Redirect"
      when 'header'
        "Header"
      end
    end

    private

    def update_uri_details
      self.update_column(:uri, path.map(&:slug).delete_if(&:blank?).join('/'))
    end

    def finalise_item
      navigable_resource = navigable_item(resource_type)
      case item_type
      when 'resource'
        navigable_resource.present? ?
          self.attributes = attributes.merge(navigable_item_attrs(navigable_resource)) :
          return
      else
        return
      end
    end

    def navigable_item(class_name)
      Kubik::NavigableResources.instance.navigable_resources.find{|r| r[:class_name] == resource_type}
    end

    def navigable_item_attrs(navigable_resource)
      if resource_id == LISTING_FORM_VALUE
        {
          'controller': navigable_resource[:controller],
          'action': :index,
          'params': {}
        }
      else
        {
          'controller': navigable_resource[:controller],
          'action': :show,
          'params': { id: resource_id }
        }
      end
    end
  end
end
