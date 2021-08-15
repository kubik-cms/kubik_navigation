# frozen_string_literal: true

require "rails/generators/active_record"

module Kubik
  module Generators
    # Metataggable generator
    class MetatagableInstallGenerator < ActiveRecord::Generators::Base
      source_root File.expand_path("templates", __dir__)
      desc "Running Kubik Metatggable generators"
      argument :name, type: :string, default: "kubik"

      def db_migrations
        migration_template "migrations/create_kubik_meta_tags.rb", "db/migrate/create_kubik_meta_tags.rb"
        puts "Database migrations added"
      end
    end
  end
end
