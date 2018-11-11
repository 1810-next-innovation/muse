Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users

  root 'items#top'
  get 'items/about', to: 'items#about'
  resources :items, only: [:index, :show, :new, :edit]


end
