# frozen_string_literal: true

module Kubik
  module Navigable
    extend ActiveSupport::Concern

    ITEM_TYPES = %i[resource link header node].freeze

    NavigableOptions = Struct.new(:name, :label, :source_url) do
      def source_url_call
        source_url.call
      end
    end

    included do
      if respond_to?(:column_names) && column_names.include?("canonical_navigation_item_id")
        belongs_to :canonical_navigation_item,
                   class_name: "Kubik::NavigationItem",
                   optional: true
      end
    end

    def navigation_items
      Kubik::NavigationItem.for_resource(self)
    end

    def canonical_navigation_item
      if respond_to?(:canonical_navigation_item_id) && canonical_navigation_item_id.present?
        return Kubik::NavigationItem.find_by(id: canonical_navigation_item_id)
      end

      items = navigation_items.to_a
      items.find(&:canonical?) || items.min_by(&:id)
    end

    def canonical_navigation_uri
      uri = canonical_navigation_item&.url
      return uri if uri.present?

      nil
    end

    module ClassMethods
      def kubik_navigable(opts = {})
        default_scope_name = respond_to?(:published) ? :published : :all

        options = {
          class_name: name,
          controller: name.tableize,
          resource_title: name.titleize,
          scopes: [
            Kubik::Navigable::NavigableOptions.new(
              default_scope_name.to_s,
              "#{default_scope_name.to_s.humanize} #{name.pluralize.downcase}",
              source_url(name, default_scope_name)
            )
          ]
        }.merge(opts)

        if options[:scopes].all? { |scope| scope.is_a?(Symbol) || scope.is_a?(String) }
          options[:scopes] = options[:scopes].map do |scope|
            Kubik::Navigable::NavigableOptions.new(
              scope.to_s,
              "#{scope.to_s.humanize} #{name.downcase.pluralize}".capitalize,
              source_url(name, scope)
            )
          end
        end

        Kubik::NavigableResources.instance.navigable_resources.add(OpenStruct.new(options))
      end

      private

      def source_url(resource_type, scope)
        proc do
          Rails.application.routes.url_helpers.get_resources_admin_kubik_navigation_items_path(
            format: :json,
            kubik_navigable_scope: scope,
            resource_type: resource_type
          )
        end
      end
    end
  end
end
