
module Api
  module V1
    class SessionsController < ApplicationController

      def create
        user = User.find_by(email: params[:session][:email].downcase)
        if user && user.authenticate(params[:session][:password])
          login(user)
          render json: {
            user: user,
            logged_in: true
          }, status: :ok
        else
          render json: {message: "パスワードまたはemailアドレスが間違っています。"}, status: :internal_server_error
        end
      end

      def destroy
        logout
        unless session[:user_id]
          render json: {
            logged_in: false
          }, status: :ok
        else
          render json: {message: "再試行してください"}, status: :internal_server_error
        end
      end

      private
          def login(user)
            session[:user_id] = user.id
          end

          def logout
            session[:user_id] = nil
          end
    end
  end
end
