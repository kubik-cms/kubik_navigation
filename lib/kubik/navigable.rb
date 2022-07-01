# frozen_string_literal: true

module Kubik
  # Navigable mixin to include in Navigable Kubik models
  module Navigable
    include ActiveSupport::Concern

    ITEM_TYPES = [:resource, :link, :header, :redirect]
    def self.included(klass)
      klass.extend(ClassMethods)
    end

    # kubik navigable shared class methods
    module ClassMethods
      def kubik_navigable(opts = {})
        options = {
          class_name: name,
          controller: name.tableize,
          resource_title: name.titleize
        }.merge(opts)
        Kubik::NavigableResources.instance.navigable_resources.add(options)
      end
    end
  end
end
