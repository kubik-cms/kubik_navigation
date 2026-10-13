# frozen_string_literal: true

module Kubik
  module NavigableLinkHelper
    def kubik_navigable_href(ref)
      data = normalize_ref(ref)
      return data[:href] if data[:kind].to_s == "url"

      if data[:kind].to_s == "item" && data[:navigation_item_id].present?
        item = Kubik::NavigationItem.find_by(id: data[:navigation_item_id])
        return item&.url
      end

      if data[:resource_type].present? && data[:resource_id].present?
        if data[:navigation_item_id].present?
          item = Kubik::NavigationItem.find_by(id: data[:navigation_item_id])
          return item&.url
        end

        klass = data[:resource_type].safe_constantize
        record = klass&.find_by(id: data[:resource_id])
        return record.canonical_navigation_uri if record.respond_to?(:canonical_navigation_uri)
      end

      nil
    end

    def rewrite_kubik_navigable_links(html)
      return html if html.blank?

      fragment = Nokogiri::HTML::DocumentFragment.parse(html.to_s)
      fragment.css("a[data-kubik-nav]").each do |anchor|
        data = normalize_ref(anchor["data-kubik-nav"])
        href = kubik_navigable_href(data)
        if href.present?
          anchor["href"] = href
          if data[:kind].to_s == "item" || data[:navigation_item_id].present?
            canonical = canonical_uri_for(data)
            anchor["data-kubik-nav-noncanonical"] = "true" if canonical.present? && canonical != href
          end
        else
          anchor["data-kubik-nav-broken"] = "true"
        end
      end
      fragment.to_html.html_safe
    end

    private

    def normalize_ref(ref)
      case ref
      when String
        begin
          JSON.parse(ref)
        rescue JSON::ParserError
          { "kind" => "url", "href" => ref }
        end
      when Hash
        ref
      else
        {}
      end.with_indifferent_access
    end

    def canonical_uri_for(data)
      if data[:resource_type].present? && data[:resource_id].present?
        klass = data[:resource_type].to_s.safe_constantize
        record = klass&.find_by(id: data[:resource_id])
        return record.canonical_navigation_uri if record.respond_to?(:canonical_navigation_uri)
      end

      if data[:navigation_item_id].present?
        item = Kubik::NavigationItem.find_by(id: data[:navigation_item_id])
        record = item&.resource
        return record.canonical_navigation_uri if record.respond_to?(:canonical_navigation_uri)
      end

      nil
    end
  end
end
