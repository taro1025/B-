module Api
  module V1
    class UsersController < ApplicationController
      before_action :current_user, only: [:update]
      def index
        render json: {}, status: :ok
      end

      def show
        if user = User.find(params[:id])
          render json: {user: user}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def create
        user = User.new(user_params)
        if user.save
          render json: {user: user}, status: :ok
        else
          render json: {message: "ユーザーの新規登録失敗"}, status: :internal_server_error
        end
      end

      def destroy
        render json: {}, status: :ok
      end

      def edit
        render json: {}, status: :ok
      end

      def update
        @current_user.update_attribute(:image, params[:image])
        @current_user.update_attribute(:name, params[:name])
        if @current_user
          render json: {message: "success"}, status: :ok
        else
          render json: {message: "miss update"}, status: :internal_server_error
        end
      end

      private

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end

    end
  end
end
