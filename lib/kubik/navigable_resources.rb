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

    def check_nested_item(path)
      Kubik::NavigationItem.where(uri: path, action: 'index').where("params->>'nested_routes' = ?", '1').exists?
    end

    def check_item(path)
      Kubik::NavigationItem.exists?(uri: path)
    end

    def find_nested_item(path)
      Kubik::NavigationItem.find_by(uri: path, action: 'index')
    end

    def find_item(path)
      Kubik::NavigationItem.find_by(uri: path)
    end
  end
end
