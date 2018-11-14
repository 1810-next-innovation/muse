Rails.application.routes.draw do
  devise_for :users, controllers: { registrations: 'registrations' }

  resources :receivers, only: [:index, :new, :create, :edit, :update, :destroy]

  resources :contacts

  root 'items#top'
  get 'items/about', to: 'items#about'
  resources :items

  post "/add_item/:item_id", to: "carts#add_item", as: "add_item"
  patch "/update_item/:id", to: "carts#update_item", as: "update_item"
  delete "/delete_item/:id", to: "carts#delete_item", as: "delete_item"
  resources :carts, only: [:show]

  resources :orders, only: [:index, :show, :new, :create]
end
