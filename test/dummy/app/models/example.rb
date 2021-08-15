# frozen_string_literal: true

# Dummy Class for testing

class Example < ApplicationRecord
  include ::Kubik::KubikMetatagable
  kubik_metatagable
end
