module KubikNavigationPageLayoutOverride
  def build_active_admin_head
    within super do
      render "admin/kubik_navigation_additional_headers"
    end
  end
end


ActiveAdmin::Views::Pages::Base.prepend KubikNavigationPageLayoutOverride
