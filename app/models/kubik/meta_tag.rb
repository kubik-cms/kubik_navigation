# frozen_string_literal: true

module Kubik
  # MetaTag class
  class MetaTag < ApplicationRecord
    self.table_name = "kubik_meta_tags"

    belongs_to :metatagable, polymorphic: true

    TWITTER_CARD_TYPES = %i[summary summary_large_image player].freeze
  end
end
