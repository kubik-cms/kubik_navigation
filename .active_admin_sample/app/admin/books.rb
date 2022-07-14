ActiveAdmin.register Book do
  menu parent: 'Books', priority: 1

  config.per_page = 5

  permit_params do
    params = [:title, :genre, :book_author_id, :genres,
            book_editions_attributes: [:edition_name, :_destroy, :id, :'published_date(1i)', :'published_date(2i)', :'published_date(3i)']
    ]
    Kubik::PermitAdditionalMetatagableAdminParams.push_to_params(Book, params)
    params
  end


  index as: :grid, columns: 4 do |book|
    link_to book.title, admin_book_path(book)
  end

  form do |f|
    tabs do
      tab 'Book details' do
        f.inputs 'Main' do
          f.input :title,  hint: 'Title of the book'
          f.input :book_author, hint: 'Main author of the book'
          f.input :genres, as: :check_boxes, collection: Book::GENRES
        end
        f.has_many :book_editions, remove_record: 'Remove Edition',
                                   add_record: 'Add Book Edition',
                                   heading: 'Manage editions',
                                   allow_destroy: true do |e|
          e.input :edition_name
          e.input :published_date
        end
      end
      tab 'SEO' do
        render 'admin/form/meta_tag_seo_helper', f: f
      end
      tab 'Social Media' do
        render 'admin/form/meta_tag_social_helper', f: f
      end
    end
    f.actions
  end

  show do
    panel 'Book Editions' do
      table_for book.book_editions do
        column :id
        column :edition_name
        column :published_date
      end
    end
    panel 'Author details' do
      attributes_table_for book.book_author do
        row :name
        row :bio
      end
    end

  end

  sidebar 'Book details', except: :index do
    attributes_table_for book do
      row :title
      row :book_author
      row :genres
      row :created_at
      row :updated_at
    end
  end
end
