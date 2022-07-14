# frozen_string_literal: true

# Main migration for metataggable functionality
class CreateKubikNavigationItems < ActiveRecord::Migration[5.1]
  def change
    create_table :kubik_navigation_items do |t|
      t.string   :ancestry, index: true
      t.string   :uri
      t.string   :controller
      t.string   :action
      t.text     :params
      t.string   :item_type

      t.timestamps
    end
  end
end
