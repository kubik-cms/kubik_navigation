# frozen_string_literal: true

class UpgradeKubikNavigationItems < ActiveRecord::Migration[6.0]
  def change
    add_column :kubik_navigation_items, :title, :string unless column_exists?(:kubik_navigation_items, :title)
    add_column :kubik_navigation_items, :text, :string unless column_exists?(:kubik_navigation_items, :text)
    add_column :kubik_navigation_items, :description, :text unless column_exists?(:kubik_navigation_items, :description)
    add_column :kubik_navigation_items, :slug, :string unless column_exists?(:kubik_navigation_items, :slug)
    add_column :kubik_navigation_items, :resource_type, :string unless column_exists?(:kubik_navigation_items, :resource_type)
    add_column :kubik_navigation_items, :resource_id, :integer unless column_exists?(:kubik_navigation_items, :resource_id)
    add_column :kubik_navigation_items, :resource_scope, :string unless column_exists?(:kubik_navigation_items, :resource_scope)
    add_column :kubik_navigation_items, :nested_routes, :boolean, default: false, null: false unless column_exists?(:kubik_navigation_items, :nested_routes)
    add_column :kubik_navigation_items, :controller_params, :json, default: {} unless column_exists?(:kubik_navigation_items, :controller_params)
    add_column :kubik_navigation_items, :path_param_keys, :json, default: [] unless column_exists?(:kubik_navigation_items, :path_param_keys)
    add_column :kubik_navigation_items, :position, :integer unless column_exists?(:kubik_navigation_items, :position)
    add_column :kubik_navigation_items, :link_location, :string unless column_exists?(:kubik_navigation_items, :link_location)
    add_column :kubik_navigation_items, :open_in_new_window, :boolean, default: false unless column_exists?(:kubik_navigation_items, :open_in_new_window)
    add_column :kubik_navigation_items, :custom_class, :string unless column_exists?(:kubik_navigation_items, :custom_class)
    add_column :kubik_navigation_items, :custom_id, :string unless column_exists?(:kubik_navigation_items, :custom_id)
    add_column :kubik_navigation_items, :config_setup, :string unless column_exists?(:kubik_navigation_items, :config_setup)
    add_column :kubik_navigation_items, :rel_attribute, :string unless column_exists?(:kubik_navigation_items, :rel_attribute)
  end
end
