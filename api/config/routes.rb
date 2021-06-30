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
      get '/graph_data/:id', to: 'book_user_reads#get_graph_data'
      get '/month_data/:id', to: 'book_user_reads#get_month_data'
      resources :book_user_favorites
      resources :posts
      get '/timeline', to: 'posts#timeline'
      resources :comments
      resources :ranks
      resources :likes, only: [:create, :destroy, :index]
      get '/check_like', to: 'likes#check'
      resources :relationships, only: [:create, :destroy]
      get '/is_follow/:id', to: 'relationships#is_follow'
      get '/notification', to: 'notifications#get_notification'
      get '/check_notice', to: 'notifications#check'
      get '/checked_notice', to: 'notifications#checked'
    end
  end
end
