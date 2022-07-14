# frozen_string_literal: true

require "rails/generators/active_record"

module Kubik
  module Generators
    # Navigation generator
    class NavigationInstallGenerator < ActiveRecord::Generators::Base
      source_root File.expand_path("templates", __dir__)
      desc "Running Kubik Navigation generators"
      argument :name, type: :string, default: "kubik"

      def db_migrations
        migration_template "migrations/create_kubik_navigation_items.rb", "db/migrate/create_kubik_navigation_items.rb"
        puts "Database migrations added"
      end
    end
  end
end
