# frozen_string_literal: true

module Kubik
  class NavigableResources
    include Singleton

    attr_accessor :navigable_resources

    def initialize
      @navigable_resources = Set[]
    end

    def select_collection
      @navigable_resources
    end

    def find_class(class_name)
      @navigable_resources.find { |resource| resource.class_name.to_s == class_name.to_s }
    end

    def check_nested_item(path)
      Kubik::NavigationResolver.nested_match?(path)
    end

    def check_item(path)
      Kubik::NavigationResolver.exact_match?(path)
    end

    def find_nested_item(path)
      Kubik::NavigationResolver.match(path)&.item
    end

    def find_item(path)
      Kubik::NavigationResolver.exact_item(path)
    end
  end
end
