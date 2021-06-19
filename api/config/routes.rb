Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post   '/login',   to: 'sessions#create'
      delete '/logout',  to: 'sessions#destroy'
      get '/checkLogin', to: 'sessions#check'
      resources :users do
        member do
          get :following, :followers
        end
      end

      resources :book_want_to_reads
      resources :book_user_reads
      resources :book_user_favorites
      resources :posts
      resources :comments
      resources :ranks
      resources :likes, only: [:create, :destroy]
      resources :relationships, only: [:create, :destroy]
    end
  end
end
