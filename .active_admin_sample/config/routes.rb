Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  constraints(KubikNavigation::NavigationConstraint) do
    get '*slug' => 'kubik_navigation/navigation#navigate_item', as: 'navigate'
  end
  constraints(KubikNavigation::NestedNavigationConstraint) do
    get '*slug/:id' => 'kubik_navigation/navigation#navigate_nested_item', as: 'nested_navigate'
  end
end
