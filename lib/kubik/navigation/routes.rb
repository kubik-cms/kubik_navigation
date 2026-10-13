# frozen_string_literal: true

require "kubik/navigation/routes/mapping"
require "kubik/navigation/routes/mapper"
require "kubik/navigation/routes/abstract_router"
require "kubik/navigation/routes/registry"

module KubikNavigation
  class NavigationConstraint
    def self.matches?(request)
      Kubik::NavigationResolver.exact_match?(request.path)
    end
  end

  class NestedNavigationConstraint
    def self.matches?(request)
      Kubik::NavigationResolver.nested_match?(request.path)
    end
  end

  module Navigation
    class Routes
      module Helper
        def use_kubik_navigation(options = {}, &block)
          KubikNavigation::Navigation::Routes.new(self, &block).generate_routes!(options)
        end
      end
      include AbstractRouter
      extend Registry

      mattr_reader :mapping do
        {}
      end

      def self.install!
        ActionDispatch::Routing::Mapper.include KubikNavigation::Navigation::Routes::Helper
        registered_routes.each(&:install!)
      end

      def initialize(routes, mapper = Mapper.new, &block)
        super
      end

      def generate_routes!(options = {})
        routes.constraints(KubikNavigation::NavigationConstraint) do
          routes.get "*slug",
                     to: "kubik_navigation/navigation#navigate_item",
                     as: options[:as] || :navigate,
                     format: false
        end
        routes.constraints(KubikNavigation::NestedNavigationConstraint) do
          routes.get "*slug/:id",
                     to: "kubik_navigation/navigation#navigate_nested_item",
                     as: options[:nested_as] || :nested_navigate,
                     format: false
        end
      end
    end
  end
end
