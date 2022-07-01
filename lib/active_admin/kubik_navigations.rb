ActiveAdmin.register Kubik::NavigationItem do
  menu priority: 3, label: 'Navigation'
  actions :all, except: %i[new show]
  config.filters = false

  permit_params do
    params = [:title, :item_type, :text, :description, :uri, :parent_id, :slug, :resource_type, :custom_class, :custom_id, :config_setup]
    params
  end

  breadcrumb do
    if params[:action] == 'index'
      [link_to('Admin', admin_root_path)]
    else
      [
        link_to('Admin', admin_root_path),
        link_to('Navigations', admin_kubik_navigation_items_path)
      ]
    end
  end

  collection_action :get_resources, method: :get do
    klass = params[:resource_type].classify.constantize
    scope = params[:resource_scope].present? ? params[:resource_scopr].to_sym : :all
    if Object.const_defined?(klass.name)
      respond_to do |format|
        format.json { render json: Book.send(scope).as_json(only: [:id, :title]) }
      end
    else
      respond_to do |format|
        format.json status: 522
      end
    end
  end

  controller do
    def index
      @page_title = 'Navigations'
      @collection = scoped_collection
      render 'admin/kubik/navigation_items/index', layout: 'active_admin'
    end

    def new
      if params[:parent_id].present?
        @resource = Kubik::NavigationItem.children_of(params[:parent_id]).new
        render 'admin/kubik/navigation_items/new', layout: 'active_admin'
      else
        @resource = Kubik::NavigationItem.new
        render 'admin/kubik/navigation_items/new_root', layout: 'active_admin'
      end
    end

    def create
      @resource = params[:parent_id].present? ?
        Kubik::NavigationItem.children_of(params[:parent_id]).new(permitted_params[:navigation_item]) :
        Kubik::NavigationItem.new(permitted_params[:navigation_item])
      if @resource.save
        redirect_to admin_kubik_navigation_items_path
      else
        render :new, params: { parent_id: permitted_params[:navigation_item][:parent_id] }
      end
    end
  end

end
