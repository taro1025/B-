module Api
  module V1
    class UsersController < ApplicationController
      def index
        render json: {}, status: :ok
      end

      def show
        render json: {}, status: :ok
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

      private

      def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation)
      end

    end
  end
end
