Rails.application.routes.draw do
  get 'orders/index'
  get 'orders/show'
  get 'orders/new'

  devise_for :users, controllers: { registrations: 'registrations' }

  resources :contacts

  root 'items#top'
  get 'items/about', to: 'items#about'
  resources :items

  post "/add_item/:item_id", to: "carts#add_item", as: "add_item"
  patch "/update_item/:id", to: "carts#update_item", as: "update_item"
  delete "/delete_item/:id", to: "carts#delete_item", as: "delete_item"
  resources :carts, only: [:show]
end
