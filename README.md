# Kubik Navigation

Named navigation trees (headers, links, nodes, and resource mounts) with catch-all routing so listings can move (`/news` → `/news-articles`) and nested URLs follow.

The gem **does not require a schema change** on existing apps. Routing, listings, scopes, and canonical links dual-read the existing JSON `params` column (`id`, `kubik_scope`, `nested_routes`). URIs with or without a leading `/` both match.

## Installation

```ruby
gem "kubik_navigation"
```

**New apps**

```
rails generate kubik:navigation:install
rails db:migrate
```

**Existing apps** (table already present): do not re-run the create migration. Point the gem, add `use_kubik_navigation` at the **end** of `config/routes.rb`, include `Kubik::Navigable` on models.

```ruby
use_kubik_navigation
root to: "pages#show", slug: "homepage"
```

### Host models

```ruby
class Page < ApplicationRecord
  include Kubik::Navigable
  kubik_navigable scopes: %i[published]
end
```

Canonical URL for a record is the nav item with `params['canonical']`, else the first matching resource item. Optional later: a `canonical_navigation_item_id` FK on the model (see upgrade docs below).

### Listing controllers

```ruby
class NewsArticlesController < ApplicationController
  def index
    scope = current_navigation_item&.resource_scope.presence || :published
    rel = NewsArticle.public_send(scope)
    rel = rel.where(year: params[:year]) if params[:year].present?
    @articles = rel
  end

  def show
    @article = NewsArticle.published.friendly.find(params[:id])
  end
end
```

Listing params merge: baked extras on the item, extra **path** segments (`path_param_keys`), then the **GET query string** (query wins). Nested show uses one leftover segment as `:id` when “Route list elements” is on.

### Rendering menus

```ruby
@nav = Kubik::Navigation["Main navigation"]
@nav.children
@nav.subtree("/news")
item.url
```

Cache key should include `Kubik::NavigationItem.cache_version`.

### Admin pickers / WYSIWYG

```erb
<%= f.input :cta, as: :kubik_navigable %>
<%= f.input :navigation_item_id, as: :kubik_navigation_item %>
```

WYSIWYG: `kubikNavigableLink` stores `{ kind: item|resource|url }`. Render with `rewrite_kubik_navigable_links`.

## Schema upgrade (optional, later)

Safe order — do **not** bulk-rewrite `uri` while old code may still run.

1. **This release.** Dual-read `params` + both URI slash forms. Rollback = revert the gem; database unchanged.
2. **Expand (optional).** When only new code is deployed:

   ```
   rails generate kubik:navigation:upgrade
   rails db:migrate
   ```

   Additive nullable columns (`resource_id`, `resource_scope`, `nested_routes`, `controller_params`, `path_param_keys`) and a copy from `params`. **Does not change `uri`.** Old and new code can still run if you keep dual-read.
3. **Contract (optional, later).** Stop relying on `params` for those keys in a follow-up gem version. Optionally normalize `uri` to always have a leading `/` in a maintenance window. Optional FKs:

   Copy `lib/generators/kubik/navigation/templates/migrations/add_canonical_navigation_item.rb` and uncomment per-table `add_reference`.

Rollback of step 2: `db:rollback` of that migration after reverting any code that *requires* the columns. The gem dual-read means rollback of columns is safe while this version is running.
