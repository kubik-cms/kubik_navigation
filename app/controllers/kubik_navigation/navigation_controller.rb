# frozen_string_literal: true

module KubikNavigation
  class NavigationController < ApplicationController
    def not_found
      head :not_found
    end

    def navigate_item
      dispatch_path(request.path)
    end

    def navigate_nested_item
      dispatch_path(request.path)
    end

    private

    def dispatch_path(path)
      match = Kubik::NavigationResolver.match(path)
      if match.nil?
        head :not_found
        return
      end

      apply_path_parameters(match)
      apply_listing_params(match)

      controller = controller_class(match.item).new
      controller.request = request
      controller.response = response
      controller.instance_variable_set(:@current_navigation_item, match.item)
      controller.instance_variable_set(:@kubik_listing_params, merged_listing_params(match))
      controller.process(match.action)
      self.response = controller.response
      self.response_body = response.body
    end

    def merged_listing_params(match)
      baked = match.item.baked_controller_params
      path_params = (match.path_params || {}).stringify_keys
      query = request.query_parameters.stringify_keys
      baked.merge(path_params).merge(query)
    end

    def apply_listing_params(match)
      merged_listing_params(match).each do |key, value|
        next if request.query_parameters.key?(key)

        request.update_param(key, value)
      end
      request.update_param("kubik_scope", match.item.resource_scope) if match.item.resource_scope.present?
    end

    def apply_path_parameters(match)
      request.path_parameters[:controller] = match.item.controller
      request.path_parameters[:action] = match.action.to_s
      if match.action.to_s == "show"
        request.path_parameters[:id] = match.id.presence || match.item.effective_resource_id
        request.path_parameters[:slug] = match.id.presence || resource_slug(match.item)
      elsif match.item.listing?
        request.path_parameters[:id] = nil
      else
        request.path_parameters[:id] = match.item.effective_resource_id
        request.path_parameters[:slug] = resource_slug(match.item)
      end
    end

    def resource_slug(item)
      record = item.resource
      return record.slug if record.respond_to?(:slug)

      item.uri.to_s.split("/").last
    end

    def controller_class(item)
      "#{item.controller}_controller".classify.constantize
    end
  end
end
