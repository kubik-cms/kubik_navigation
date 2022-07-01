module Kubik
  class NavigationItem < ActiveRecord::Base
    self.table_name = 'kubik_navigation_items'
    attr_accessor :resource_type, :resource_id
    validates_uniqueness_of :slug, scope: :ancestry
    validates_uniqueness_of :title, if: -> { ancestry.nil? }
    validates_presence_of :title
    validates_presence_of :controller, :action, if: -> { item_type == 'resource' }
    has_ancestry
    after_save :update_uri_details
    before_validation :finalise_item

    private

    def update_uri_details
      self.update_column(:uri, path.map(&:slug).delete_if(&:blank?).join('/'))
    end

    def finalise_item
      navigable_resource = navigable_item(resource_type)
      case item_type
      when 'resource'
        navigable_resource.present? ?
          self.attributes = attributes.merge(navigable_item_attrs(navigable_resource)) :
          return
      else
        return
      end
    end

    def navigable_item(class_name)
      Kubik::NavigableResources.instance.navigable_resources.find{|r| r[:class_name] == resource_type}
    end

    def navigable_item_attrs(navigable_resource)
      {
        'controller': navigable_resource[:controller],
        'action': :show
      }
    end
  end
end
