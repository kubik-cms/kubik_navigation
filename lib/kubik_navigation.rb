# frozen_string_literal: true

require 'ancestry'
require 'kubik/kubik_navigation'
module KubikNavigation
  class Error < StandardError; end
  # Your code goes here...
end

module KubikNavigation
  module Rails
    class Engine < ::Rails::Engine
      isolate_namespace KubikNavigation

      config.assets.precompile += %w( kubik_navigation.js )
      initializer :kubik_navigation do
        ActiveAdmin.application.load_paths += Dir["#{File.dirname(__FILE__)}/active_admin"]
        ActiveAdmin.application.load_paths += Dir["#{File.dirname(__FILE__)}/active_admin/views"]
      end
    end
  end
end
