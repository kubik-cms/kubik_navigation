# frozen_string_literal: true

require "rails/generators/active_record"

module Kubik
  module Generators
    module Navigation
      class InstallGenerator < ActiveRecord::Generators::Base
        source_root File.expand_path("templates", __dir__)
        desc "Install Kubik Navigation (create table + admin head initializer)"
        argument :name, type: :string, default: "kubik"

        def add_initializer
          copy_file "config/initializers/kubik_navigation_admin_head_additions.rb",
                    "config/initializers/kubik_navigation_admin_head_additions.rb"
        end

        def db_migrations
          migration_template "migrations/create_kubik_navigation_items.rb",
                             "db/migrate/create_kubik_navigation_items.rb"
          say "Created table migration. Add `use_kubik_navigation` at the end of config/routes.rb", :green
          say "Existing apps: skip this create migration; routing works on the current schema.", :yellow
          say "Optional later: rails generate kubik:navigation:upgrade", :yellow
        end
      end
    end
  end
end
