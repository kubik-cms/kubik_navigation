# frozen_string_literal: true

require "kubik/navigation/routes/mapping"
require "kubik/navigation/routes/mapper"
require "kubik/navigation/routes/abstract_router"
require "kubik/navigation/routes/registry"

module KubikNavigation
  class NavigationConstraint
    def self.matches?(request)
      Kubik::NavigableResources.instance.check_item(request.params[:slug])
    end
  end

  class NestedNavigationConstraint
    def self.matches?(request)
      Kubik::NavigableResources.instance.check_nested_item(request.params[:slug])
    end
  end

  module Navigation
    class Routes # :nodoc:
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

      def generate_routes!(options)
        routes.constraints(KubikNavigation::NavigationConstraint.new) do
          routes.get '*path', to: 'kubik_navigation/navigation#not_found', via: :all
        end
      end
    end
  end
end
