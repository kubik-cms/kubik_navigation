# frozen_string_literal: true

module KubikNavigation
  module Navigation
    class Routes # :nodoc:
      class Mapping
        attr_accessor :controllers, :as, :skips

        def initialize
          @controllers = {
          }

          @as = {
          }

          @skips = []
        end

        def [](routes)
          {
            controllers: @controllers[routes],
            as: @as[routes],
          }
        end

        def skipped?(controller)
          @skips.include?(controller)
        end
      end
    end
  end
end
