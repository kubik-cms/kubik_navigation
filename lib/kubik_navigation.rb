# frozen_string_literal: true

require "acts_as_list"
require "ancestry"
require "kubik/kubik_navigation"
module KubikNavigation
  class Error < StandardError; end
  # Your code goes here...
end

module KubikNavigation
  module Rails
    # Main engine file
    class Engine < ::Rails::Engine
      isolate_namespace KubikNavigation

      config.assets.precompile += %w[kubik_navigation.js]
      initializer :kubik_navigation do
        ActiveAdmin.application.load_paths += Dir["#{File.dirname(__FILE__)}/active_admin"]
        ActiveAdmin.application.load_paths += Dir["#{File.dirname(__FILE__)}/active_admin/views"]
      end
      initializer "local_helper.action_controller" do
        ActiveSupport.on_load :action_controller do
          helper ::Kubik::NavigableHelper
        end
      end
    end
  end
end
