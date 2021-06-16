Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post   '/login',   to: 'sessions#create'
      delete '/logout',  to: 'sessions#destroy'
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
    end
  end
end
