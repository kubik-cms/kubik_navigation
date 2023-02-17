# frozen_string_literal: true

module Kubik
  class NavigationFacade
    def initialize(name = "")
      @name = name
    end

    def children
      return missing_warning && [] if root_item.new_record?

      root_item.children
    end

    private

    def root_item
      @root_item ||= Kubik::NavigationItem.roots.find_or_initialize_by(title: name)
    end

    def missing_warning
      Rails.logger.warn "WARNING - Kubik Navigation: Tried to access navigation '#{name}' but it does not exist"
    end

    attr_reader :name
  end
end
