# frozen_string_literal: true

module KubikMetatagable
  class Error < StandardError; end
  # Your code goes here...
end

module Kubik
  require "kubik/kubik_metatagable"
  require "kubik/permit_additional_admin_params"
end
