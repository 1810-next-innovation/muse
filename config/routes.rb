Rails.application.routes.draw do
	devise_for :users, controllers: {
	        sessions: 'users/sessions',
	        registrations: 'users/registrations'
	      }
  resources :users do
    resource :favorites, only: [:show]
		resources :carts, only: [:show]
		resources :orders, only: [:index, :show, :new, :create]
  end
	get 'users/:id/receivers', to: 'users#receivers', as: "user_receivers"
  get 'users/:id/edit_receivers', to: 'users#edit_receivers', as: "edit_user_receivers"

  get 'contacts/about', to: 'contacts#about'
  get 'contacts/term', to: 'contacts#term'
  get 'contacts/recieve', to: 'contacts#recieve'
  resources :contacts

  root 'items#top'
  get 'items/about', to: 'items#about'
  resources :items do
    resource :favorites, only: [:create, :destroy]
    resource :reviews, only: [:create, :destroy]
  end

  post '/add_cart_item/:item_id', to: "carts#add_cart_item", as: "add_cart_item"
  patch  '/update_cart_item/:id', to: "carts#update_cart_item", as: "update_cart_item"
  delete '/delete_cart_item/:id', to: "carts#delete_cart_item", as: "delete_cart_item"

  get 'orders_all', to: "orders#orders_all"
  patch '/update_status/:id', to: "orders#update_status", as: "update_status"

  resources :labels, only: [:new, :create, :destroy]
  resources :artists, only: [:new, :create, :destroy]
  resources :genres, only: [:new, :create, :destroy]
end
