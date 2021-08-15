# frozen_string_literal: true

module Kubik
  # PermitAdditionalAdminParams module
  module PermitAdditionalAdminParams
    extend self

    def push_to_params(klass, params)
      params.push meta_tag_attributes(klass)
    end

    private

    def meta_tag_attributes(_klass)
      {
        meta_tag_attributes: %i[
          title_tag meta_description og_title og_description og_image
          twitter_title twitter_description twitter_media twitter_card
        ]
      }
    end
  end
end
