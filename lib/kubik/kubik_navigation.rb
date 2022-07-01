# frozen_string_literal: true

module KubikNavigation
  # Navigation module
  module Navigation
    require 'kubik/navigation/routes'
    require 'kubik/navigation/engine'
    require 'kubik/navigable_resources'
    require 'kubik/navigable'
    extend ActiveSupport::Concern
  end
end
