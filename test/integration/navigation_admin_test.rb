# frozen_string_literal: true

require "test_helper"

class BlogTest < ActionDispatch::IntegrationTest
  include Devise::Test::IntegrationHelpers
  setup do
    visit "/admin/login"
    sign_in admin_users(:admin)
    assert_equal(page.status_code, 200)
  end

  test "navigation interface" do
  end
end
