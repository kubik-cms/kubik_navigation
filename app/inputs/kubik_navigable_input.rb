# frozen_string_literal: true

class KubikNavigableInput < Formtastic::Inputs::StringInput
  def to_html
    input_wrapping do
      label_html <<
        template.content_tag(:div, class: "kubik-navigable-input", data: stimulus_data) do
          kind_select + item_select + resource_type_select + resource_select + location_select + hidden_field
        end
    end
  end

  private

  def current
    @current ||= begin
      raw = object.public_send(method)
      hash = raw.is_a?(String) ? (JSON.parse(raw) rescue {}) : (raw || {})
      hash.with_indifferent_access
    end
  end

  def stimulus_data
    {
      controller: "kubik-navigable-picker",
      kubik_navigable_picker_resources_url_value: template.get_resources_admin_kubik_navigation_items_path(format: :json),
      kubik_navigable_picker_items_url_value: template.link_targets_admin_kubik_navigation_items_path(format: :json),
      kubik_navigable_picker_locations_url_value: template.navigation_items_for_resource_admin_kubik_navigation_items_path(format: :json)
    }
  end

  def kind_select
    template.select_tag(
      "#{object_name}[#{method}_kind]",
      template.options_for_select(
        [["Navigation item", "item"], ["Resource", "resource"]],
        current[:kind]
      ),
      data: { action: "change->kubik-navigable-picker#kindChange", kubik_navigable_picker_target: "kind" }
    )
  end

  def item_select
    template.select_tag(
      "#{object_name}[#{method}_item]",
      "",
      include_blank: true,
      data: { kubik_navigable_picker_target: "item" }
    )
  end

  def resource_type_select
    types = Kubik::NavigableResources.instance.select_collection.map { |m| [m.resource_title, m.class_name] }
    template.select_tag(
      "#{object_name}[#{method}_resource_type]",
      template.options_for_select(types, current[:resource_type]),
      include_blank: true,
      data: { action: "change->kubik-navigable-picker#resourceTypeChange", kubik_navigable_picker_target: "resourceType" }
    )
  end

  def resource_select
    template.select_tag(
      "#{object_name}[#{method}_resource_id]",
      "",
      include_blank: true,
      data: { action: "change->kubik-navigable-picker#resourceChange", kubik_navigable_picker_target: "resource" }
    )
  end

  def location_select
    template.select_tag(
      "#{object_name}[#{method}_location]",
      "",
      include_blank: "Canonical",
      data: { kubik_navigable_picker_target: "location" }
    )
  end

  def hidden_field
    builder.hidden_field(method, value: current.to_json, data: { kubik_navigable_picker_target: "value" })
  end
end
