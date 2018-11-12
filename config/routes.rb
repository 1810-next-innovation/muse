Rails.application.routes.draw do
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users 
  resources :contacts

  root 'items#top'
  get 'items/about', to: 'items#about'
  get 'carts/show'
  resources :items
  # , only: [:index, :show, :new, :create, :edit]


end
