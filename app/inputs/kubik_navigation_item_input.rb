# frozen_string_literal: true

class KubikNavigationItemInput < Formtastic::Inputs::SelectInput
  def collection
    Kubik::NavigationItem.routable.order(:uri).map do |item|
      ["#{item.root_title}: #{item.title} (#{item.uri})", item.id]
    end
  end
end
