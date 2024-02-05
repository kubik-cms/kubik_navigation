# frozen_string_literal: true

module KubikNavigation
  # Navigation module
  class NavigationController < ApplicationController
    def not_found; end

    def navigate_item
      @navigation_item = Kubik::NavigableResources.instance.find_item(request.params[:slug])
      request.params.merge!(navigation_item: @navigation_item[:params]) if @navigation_item[:params].present?
      controller_class.new.dispatch(@navigation_item[:action], request, response)
    end

    def navigate_nested_item
      @navigation_item = Kubik::NavigableResources.instance.find_nested_item(request.params[:slug])
      request.params.merge!(parent_navigation: @navigation_item[:params]) if @navigation_item[:params].present?
      controller_class.new.dispatch(:show, request, response)
    end

    private

    def controller_class
      "#{@navigation_item[:controller]}_controller".classify.constantize
    end
  end
end
