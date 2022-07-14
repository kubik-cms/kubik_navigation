# frozen_string_literal: true

# Example model
class Book < ApplicationRecord
  GENRES = %i[thriller crime horror fantasy].freeze

  include Kubik::Navigable
  kubik_navigable(scopes: %i[published recent recently_published])

  belongs_to :book_author
  has_many :book_editions
  accepts_nested_attributes_for :book_editions, allow_destroy: true

  validates_presence_of :title
  delegate :name, to: :book_author, prefix: true

  scope :published, -> {
    where('published_at < ?', DateTime.now)
    .where.not('published_at = NULL') }

  scope :recent, -> {
    order(published_at: :desc)
  }

  scope :recently_published, -> {
    publihed.recent
  }
end
