# frozen_string_literal: true

require "rails/generators/active_record"

module Kubik
  module Generators
    module Navigation
      class UpgradeGenerator < ActiveRecord::Generators::Base
        source_root File.expand_path("templates", __dir__)
        desc "Optional additive columns for kubik_navigation. Not required for routing; dual-read of params works without this."
        argument :name, type: :string, default: "kubik"

        def db_migrations
          migration_template "migrations/upgrade_kubik_navigation_items.rb",
                             "db/migrate/upgrade_kubik_navigation_items.rb"
          say "Additive upgrade migration copied.", :green
          say "See README 'Schema upgrade (optional)' before running db:migrate.", :yellow
        end
      end
    end
  end
end
