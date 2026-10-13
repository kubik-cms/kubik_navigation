module Kubik
  module Navigation
    def self.[](name)
      NavigationFacade.new(name)
    end

    class Engine < Rails::Engine
      isolate_namespace Kubik
      initializer "kubik_navigation.routes" do
        KubikNavigation::Navigation::Routes.install!
      end
    end
  end
end
