ActiveAdmin.register Kubik::NavigationItem do
  menu priority: 3, label: "Navigation"
  actions :all, except: %i[new show]
  config.filters = false

  permit_params do
    [
      :title, :item_type, :text, :description, :uri,
      :parent_id, :slug, :resource_type, :custom_class,
      :custom_id, :config_setup, :resource_id, :resource_picker, :open_in_new_window,
      :link_location, :rel_attribute, :nested_routes, :resource_scope,
      :path_param_keys_text, :controller_params_text, :canonical,
      { navigation_image_attributes: %i[kubik_media_upload_id id _destroy] }
    ]
  end

  breadcrumb do
    if params[:action] == "index"
      [link_to("Admin", admin_root_path)]
    else
      [
        link_to("Admin", admin_root_path),
        link_to("Navigations", admin_kubik_navigation_items_path)
      ]
    end
  end

  collection_action :get_resources, method: :get do
    klass = params[:resource_type].to_s.classify.safe_constantize
    scope = params[:kubik_navigable_scope].presence&.to_sym || :published
    if klass
      relation = klass.respond_to?(scope) ? klass.public_send(scope) : klass.all
      payload = relation.map do |record|
        {
          id: record.id,
          title: record.try(:title) || record.to_s,
          slug: record.try(:slug)
        }
      end
      render json: payload
    else
      render json: [], status: :unprocessable_entity
    end
  end

  collection_action :navigation_items_for_resource, method: :get do
    items = Kubik::NavigationItem.resource_records.where(
      resource_type: params[:resource_type],
      resource_id: params[:resource_id]
    )
    render json: items.map { |item|
      {
        id: item.id,
        title: item.title,
        tree: item.root_title,
        uri: item.uri,
        canonical: item.resource.respond_to?(:canonical_navigation_item_id) &&
          item.resource.canonical_navigation_item_id == item.id
      }
    }
  end

  collection_action :link_targets, method: :get do
    items = Kubik::NavigationItem.routable.order(:uri)
    render json: items.map { |item|
      {
        id: item.id,
        title: item.title,
        tree: item.root_title,
        uri: item.uri,
        item_type: item.item_type,
        listing: item.listing?,
        resource_type: item.resource_type,
        resource_id: item.resource_id
      }
    }
  end

  member_action :reorder, method: :patch do
    resource = Kubik::NavigationItem.find(params[:node_id])
    resource.parent = Kubik::NavigationItem.find(params[:parent_id])
    resource.save
    resource.position = params[:position]
    resource.save
  end

  controller do
    def index
      @page_title = "Navigations"
      @collection = scoped_collection
      render "admin/kubik/navigation_items/index", layout: "active_admin"
    end

    def new
      if params[:parent_id].present?
        @resource = Kubik::NavigationItem.children_of(params[:parent_id]).new
        render "admin/kubik/navigation_items/new", layout: "active_admin"
      else
        @resource = Kubik::NavigationItem.new
        render "admin/kubik/navigation_items/new_root", layout: "active_admin"
      end
    end

    def edit
      @resource = Kubik::NavigationItem.find(params[:id])
      if @resource.is_root?
        render "admin/kubik/navigation_items/edit_root", layout: "active_admin"
      else
        render "admin/kubik/navigation_items/edit", layout: "active_admin"
      end
    end

    def create
      @resource = if params[:parent_id].present?
                    Kubik::NavigationItem.children_of(params[:parent_id]).new(permitted_params[:navigation_item])
                  else
                    Kubik::NavigationItem.new(permitted_params[:navigation_item])
                  end
      if @resource.save
        redirect_to admin_kubik_navigation_items_path
      else
        render "admin/kubik/navigation_items/new",
               params: { parent_id: permitted_params[:navigation_item][:parent_id] },
               layout: "active_admin"
      end
    end

    def update
      @resource = Kubik::NavigationItem.find(params[:id])
      if @resource.update(permitted_params[:navigation_item])
        redirect_to admin_kubik_navigation_items_path
      elsif @resource.is_root?
        render "admin/kubik/navigation_items/edit_root", layout: "active_admin"
      else
        render "admin/kubik/navigation_items/edit", layout: "active_admin"
      end
    end
  end
end
