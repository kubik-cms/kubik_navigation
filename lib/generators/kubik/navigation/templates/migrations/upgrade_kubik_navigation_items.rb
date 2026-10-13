# frozen_string_literal: true

# OPTIONAL. The gem dual-reads JSON `params` without these columns.
# Run only when you are ready to contract storage onto real columns.
# Does not rewrite `uri` (leading slash is resolved in Ruby).
class UpgradeKubikNavigationItems < ActiveRecord::Migration[7.0]
  def up
    add_column :kubik_navigation_items, :resource_id, :integer unless column_exists?(:kubik_navigation_items, :resource_id)
    add_column :kubik_navigation_items, :resource_scope, :string unless column_exists?(:kubik_navigation_items, :resource_scope)
    unless column_exists?(:kubik_navigation_items, :nested_routes)
      add_column :kubik_navigation_items, :nested_routes, :boolean, default: false, null: false
    end
    unless column_exists?(:kubik_navigation_items, :controller_params)
      add_column :kubik_navigation_items, :controller_params, :json, default: {}
    end
    unless column_exists?(:kubik_navigation_items, :path_param_keys)
      add_column :kubik_navigation_items, :path_param_keys, :json, default: []
    end

    unless index_exists?(:kubik_navigation_items, %i[resource_type resource_id], name: "index_kubik_navigation_items_on_resource")
      add_index :kubik_navigation_items, %i[resource_type resource_id],
                name: "index_kubik_navigation_items_on_resource"
    end
    add_index :kubik_navigation_items, :uri unless index_exists?(:kubik_navigation_items, :uri)

    reversible do |dir|
      dir.up { backfill_from_params }
    end
  end

  def down
    remove_index :kubik_navigation_items, name: "index_kubik_navigation_items_on_resource" if index_exists?(:kubik_navigation_items, name: "index_kubik_navigation_items_on_resource")
    remove_column :kubik_navigation_items, :path_param_keys if column_exists?(:kubik_navigation_items, :path_param_keys)
    remove_column :kubik_navigation_items, :controller_params if column_exists?(:kubik_navigation_items, :controller_params)
    remove_column :kubik_navigation_items, :nested_routes if column_exists?(:kubik_navigation_items, :nested_routes)
    remove_column :kubik_navigation_items, :resource_scope if column_exists?(:kubik_navigation_items, :resource_scope)
    remove_column :kubik_navigation_items, :resource_id if column_exists?(:kubik_navigation_items, :resource_id)
  end

  private

  def backfill_from_params
    say_with_time "Copy params into new columns (uri left unchanged)" do
      execute <<~SQL.squish
        UPDATE kubik_navigation_items
        SET resource_id = NULLIF(params->>'id', '__index__')::integer
        WHERE params->>'id' ~ '^[0-9]+$'
          AND resource_id IS NULL
      SQL
      execute <<~SQL.squish
        UPDATE kubik_navigation_items
        SET resource_scope = params->>'kubik_scope'
        WHERE params->>'kubik_scope' IS NOT NULL AND resource_scope IS NULL
      SQL
      execute <<~SQL.squish
        UPDATE kubik_navigation_items
        SET nested_routes = TRUE
        WHERE params->>'nested_routes' IN ('1', 'true', 't')
      SQL
    end
  end
end
