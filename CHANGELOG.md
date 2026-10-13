## [Unreleased]

## [0.1.7] - 2026-10-13

### Added

- `Kubik::NavigationItem.cache_version` / `bust_cache!` for menu cache keys.
- `Kubik::Navigation["…"]` on the engine module (no `class`/`module` name clash).
- Legacy resource resolution from URI slug when `params['id']` is blank; routable items without a resolved record stay visible when `uri` + `controller` are set.

### Changed

- Menu children ordered by `acts_as_list` `position`.
- Navigation facade filters visible children after ordering.

## [0.1.6] - 2026-10-13

### Added

- Dual-read of JSON `params` (no required schema change), listing mounts, `use_kubik_navigation` constraints, navigable pickers, WYSIWYG link helper.

### Changed

- URI matching accepts with or without a leading slash. Optional column upgrade via `rails generate kubik:navigation:upgrade`.

## [0.1.0] - 2021-06-04

- Initial release
