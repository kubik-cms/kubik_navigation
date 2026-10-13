# frozen_string_literal: true

module Kubik
  class NavigationResolver
    SKIP_PREFIXES = %w[/assets/ /packs/ /uploads/ /admin /rails/].freeze

    Match = Struct.new(:item, :action, :id, :path_params, keyword_init: true)

    class << self
      def match(path)
        new(path).match
      end

      def exact_match?(path)
        exact_item(path).present?
      end

      def exact_item(path)
        new(path).exact_item
      end

      def nested_match?(path)
        result = match(path)
        result.present? && !exact_match?(path)
      end

      def normalize(path)
        return "" if path.blank?

        trimmed = path.to_s.split("?").first.to_s
        trimmed = trimmed.sub(%r{/\z}, "") unless trimmed == "/"
        trimmed.start_with?("/") ? trimmed : "/#{trimmed}"
      end
    end

    def initialize(path)
      @path = self.class.normalize(path)
    end

    def match
      return nil if skip?

      exact = exact_item
      return Match.new(item: exact, action: exact.action.to_s, path_params: {}) if exact

      prefix_match
    end

    def exact_item
      return nil if skip?

      item = Kubik::NavigationItem.find_routable_by_uri(@path)
      return nil unless item&.visible?

      item
    end

    private

    def skip?
      return true if @path.blank? || @path == "/"

      SKIP_PREFIXES.any? { |prefix| @path == prefix.chomp("/") || @path.start_with?(prefix) }
    end

    def prefix_match
      parts = @path.split("/").reject(&:blank?)
      return nil if parts.length < 2

      (parts.length - 1).downto(1) do |length|
        prefix = "/#{parts[0, length].join('/')}"
        leftover = parts[length..]
        item = listing_at(prefix)
        next unless item

        if leftover.size == 1 && item.nested_routes?
          return Match.new(item: item, action: "show", id: leftover.first, path_params: {})
        end

        keys = item.path_param_keys_list
        next unless keys.size == leftover.size && leftover.any?

        mapped = keys.zip(leftover).to_h
        return Match.new(item: item, action: "index", path_params: mapped)
      end

      nil
    end

    def listing_at(uri)
      item = Kubik::NavigationItem.find_listing_by_uri(uri)
      return nil unless item&.visible?

      item
    end
  end
end
