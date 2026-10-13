# frozen_string_literal: true

# OPTIONAL later phase. Canonical location already works via
# `params['canonical']` on kubik_navigation_items.
# Per-model FK is only needed if you want a column on Page/NewsArticle.
class AddCanonicalNavigationItem < ActiveRecord::Migration[7.0]
  def change
    # Example:
    # add_reference :pages, :canonical_navigation_item,
    #               foreign_key: { to_table: :kubik_navigation_items },
    #               optional: true
  end
end
