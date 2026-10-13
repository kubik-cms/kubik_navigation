# frozen_string_literal: true

class CreateKubikNavigationItems < ActiveRecord::Migration[7.0]
  def change
    create_table :kubik_navigation_items do |t|
      t.string   :title
      t.string   :text
      t.text     :description
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
      t.integer  :resource_id
      t.string   :resource_scope
      t.boolean  :nested_routes, default: false, null: false
      t.json     :controller_params, default: {}
      t.json     :path_param_keys, default: []
      t.boolean  :open_in_new_window, default: false
      t.integer  :position
      t.string   :rel_attribute
      t.string   :link_location

      t.timestamps
    end

    add_index :kubik_navigation_items, [:resource_type, :resource_id],
              name: "index_kubik_navigation_items_on_resource"
    add_index :kubik_navigation_items, :uri
  end
end
