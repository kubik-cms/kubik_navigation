# frozen_string_literal: true

require "test_helper"

class NavigationTest < ActiveSupport::TestCase
  setup do
    Kubik::NavigableResources.instance.navigable_resources.clear
    Example.class_eval do
      include Kubik::Navigable unless included_modules.include?(Kubik::Navigable)
      kubik_navigable unless Kubik::NavigableResources.instance.find_class("Example")
    end
  end

  def create_root
    Kubik::NavigationItem.create!(title: "Main navigation")
  end

  test "computes canonical leading-slash URIs from slug path" do
    root = create_root
    parent = Kubik::NavigationItem.create!(
      title: "About",
      slug: "about",
      item_type: "node",
      parent: root
    )
    assert_equal "/about", parent.reload.uri
  end

  test "listing nested_routes matches leftover segment as show" do
    root = create_root
    listing = Kubik::NavigationItem.create!(
      title: "News",
      slug: "news",
      item_type: "resource",
      resource_type: "Example",
      resource_picker: Kubik::NavigationItem::LISTING_FORM_VALUE,
      nested_routes: true,
      parent: root
    )
    assert listing.reload.listing?
    match = Kubik::NavigationResolver.match("/news/my-story")
    assert_equal listing.id, match.item.id
    assert_equal "show", match.action
    assert_equal "my-story", match.id
  end

  test "path param keys map leftover segments to index" do
    root = create_root
    listing = Kubik::NavigationItem.create!(
      title: "People",
      slug: "people",
      item_type: "resource",
      resource_type: "Example",
      resource_picker: Kubik::NavigationItem::LISTING_FORM_VALUE,
      nested_routes: false,
      path_param_keys_text: "role",
      parent: root
    )
    match = Kubik::NavigationResolver.match("/people/directors")
    assert_equal listing.id, match.item.id
    assert_equal "index", match.action
    assert_equal "directors", match.path_params["role"]
  end

  test "more specific baked listing wins over parent path params" do
    root = create_root
    Kubik::NavigationItem.create!(
      title: "People",
      slug: "people",
      item_type: "resource",
      resource_type: "Example",
      resource_picker: Kubik::NavigationItem::LISTING_FORM_VALUE,
      nested_routes: false,
      path_param_keys_text: "role",
      parent: root
    )
    child = Kubik::NavigationItem.create!(
      title: "Directors",
      slug: "directors",
      item_type: "resource",
      resource_type: "Example",
      resource_picker: Kubik::NavigationItem::LISTING_FORM_VALUE,
      parent: Kubik::NavigationItem.find_by(slug: "people")
    )
    match = Kubik::NavigationResolver.match("/people/directors")
    assert_equal child.id, match.item.id
    assert_equal "index", match.action
    assert_nil match.path_params&.[]("role")
  end

  test "unpublished resource is not an exact match" do
    skip "Example has no published? method"
  end
end
