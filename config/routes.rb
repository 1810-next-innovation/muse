Rails.application.routes.draw do
  devise_for :users
  resources :users

  resources :contacts

  root 'items#top'
  get 'items/about', to: 'items#about'
  resources :items

  post "/add_item/:item_id", to: "carts#add_item", as: "add_item"
  patch "/update_item", to: "carts#update_item"
  delete "/delete_item", to: "carts#delete_item"
  post "/items/session", to: "items#session_delete"
  resources :carts, only: [:show]
end
