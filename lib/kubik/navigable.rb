# frozen_string_literal: true

module Kubik
  # Navigable mixin to include in Navigable Kubik models
  module Navigable
    include ActiveSupport::Concern
    ITEM_TYPES = %i[resource link header node].freeze

    NavigableOptions = Struct.new(:name, :label, :source_url) do
      def source_url_call
        source_url.call
      end
    end
    def self.included(klass)
      klass.extend(ClassMethods)
    end

    # kubik navigable shared class methods
    module ClassMethods
      def kubik_navigable(opts = {})
        options = {
          class_name: name,
          controller: name.tableize,
          resource_title: name.titleize,
          scopes: [
            all: {
              name: name,
              label: "All #{name.downcase}",
              source_url: source_url(name, :all),
            }
          ]
        }.merge(opts)
        if options[:scopes].all?(Symbol)
          updated_scopes = options[:scopes].map do |scope|
            Kubik::Navigable::NavigableOptions.new(
              scope.to_s,
              "#{scope.to_s.humanize} #{name.downcase.pluralize}".capitalize,
              source_url(name, scope)
            )
          end
          options[:scopes] = updated_scopes
        end

        Kubik::NavigableResources.instance.navigable_resources.add(OpenStruct.new(options))
      end

      private

      def source_url(resource_type, scope)
        proc { Rails.application.routes.url_helpers.get_resources_admin_kubik_navigation_items_path(format: :json, kubik_navigable_scope: scope, resource_type: resource_type) }
      end
    end
  end
end
