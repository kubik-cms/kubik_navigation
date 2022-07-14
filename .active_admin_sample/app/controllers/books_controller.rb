class BooksController < ApplicationController
  def index
    scope = params[:scope].present? ? params[:scope].to_sym : :all
    @books = Book.send(scope)
  end

  def show
    @book = Book.find(params[:id])
  end
end
