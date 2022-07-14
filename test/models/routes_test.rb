# frozen_string_literal: true

require "#{File.dirname(__FILE__)}/../test_helper"

class RoutesTest < ActionController::TestCase
  test "does not route to the post" do
    @controller = DummyController.new
    assert_raise ActionController::UrlGenerationError do
      get "/post/1"
    end
  end
  test "should route to post" do
    Kubik::NavigationItem.new()
    assert_routing "/posts/1", { controller: "kubik_navigation/navigation", action: "not_found", path: "posts/1" }
  end
end

class DummyController < ActionController::Base

end
