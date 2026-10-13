# frozen_string_literal: true

module Kubik
  class NavigationFacade
    def initialize(name = "")
      @name = name
    end

    def children
      return missing_warning && [] if root_item.new_record?

      visible_nodes(root_item.children)
    end

    def items
      children
    end

    def subtree(uri_or_item)
      node = if uri_or_item.is_a?(Kubik::NavigationItem)
               uri_or_item
             else
               Kubik::NavigationItem.find_by(uri: Kubik::NavigationResolver.normalize(uri_or_item))
             end
      return [] unless node

      visible_nodes(node.children)
    end

    private

    def visible_nodes(nodes)
      nodes.order(:position).select(&:visible?)
    end

    def root_item
      @root_item ||= Kubik::NavigationItem.roots.find_or_initialize_by(title: @name)
    end

    def missing_warning
      Rails.logger.warn "WARNING - Kubik Navigation: Tried to access navigation '#{@name}' but it does not exist"
    end
  end
end
