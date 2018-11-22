Rails.application.routes.draw do
devise_for :users, controllers: {
        sessions: 'users/sessions',
        registrations: 'users/registrations'
      }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users do
    resource :favorites, only: [:show]
  end


  resources :receivers, only: [:index, :new, :create, :edit, :update, :destroy]

  get 'contacts/about', to: 'contacts#about'
  get 'contacts/term', to: 'contacts#term'
  get 'contacts/recieve', to: 'contacts#recieve'
  resources :contacts

  root 'items#top'
  get 'items/about', to: 'items#about'

  get 'carts/show'
  resources :items do
    resource :favorites, only: [:create, :destroy]
    resource :reviews, only: [:create, :destroy]
  end

  post '/add_item/:item_id', to: "carts#add_item", as: "add_item"
  patch '/update_item/:id', to: "carts#update_item", as: "update_item"
  delete '/delete_item/:id', to: "carts#delete_item", as: "delete_item"
  resources :carts, only: [:show]

  get 'orders_all', to: "orders#index_all"
  patch '/update_status/:id', to: "orders#update_status", as: "update_status"
  resources :orders, only: [:index, :show, :new, :create]

  resources :labels, only: [:new, :create, :index]
end