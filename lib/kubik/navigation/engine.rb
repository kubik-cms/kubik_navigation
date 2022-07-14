module Kubik
  module Navigation
    class Engine < Rails::Engine
      isolate_namespace Kubik
      initializer "kubik_navigation.routes" do
        KubikNavigation::Navigation::Routes.install!
      end
    end
  end
end
