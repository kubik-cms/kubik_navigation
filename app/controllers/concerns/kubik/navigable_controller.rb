# frozen_string_literal: true

module Kubik
  module NavigableController
    extend ActiveSupport::Concern

    included do
      helper_method :current_navigation_item, :kubik_listing_params if respond_to?(:helper_method)
    end

    def current_navigation_item
      @current_navigation_item
    end

    def kubik_listing_params
      @kubik_listing_params || {}
    end
  end
end
