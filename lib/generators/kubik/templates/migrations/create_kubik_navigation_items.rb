# frozen_string_literal: true

# Main migration for metataggable functionality
class CreateKubikNavigationItems < ActiveRecord::Migration[5.1]
  def change
    create_table :kubik_navigation_items do |t|
      t.string   :title
      t.string   :text
      t.text   :description
      t.string   :ancestry, index: true
      t.string   :slug
      t.string   :uri
      t.string   :controller
      t.string   :action
      t.json     :params, default: {}
      t.string   :item_type
      t.string   :custom_class
      t.string   :custom_id
      t.string   :config_setup
      t.string   :resource_type
      t.boolean  :open_in_new_window, default: false
      t.integer  :position
      t.string   :rel_attribute
      t.string   :link_location

      t.timestamps
    end
  end
end
