Rails.application.routes.draw do
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users
  get 'contacts/about', to: 'contacts#about'
  get 'contacts/term', to: 'contacts#term'
  resources :contacts

  root 'items#top'
  get 'items/about', to: 'items#about'
  get 'carts/show'
  resources :items
      resource :favorites, only: [:create, :destroy]
  # , only: [:index, :show, :new, :create, :edit]


end
