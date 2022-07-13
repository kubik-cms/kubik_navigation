module Kubik::NavigableHelper
  def options_for_scope_with_url(models)
    models.map do |model|
      option_tags = options_for_select(
        model.scopes.map do |scope|
          [
            scope.label,
            scope.name,
            {
              data: {
                url: scope.source_url_call,
                resource_type: model.class_name
              }
            }
          ]
        end
      )
      content_tag(:optgroup, option_tags, label: model.resource_title)
    end.join.html_safe
  end
end
