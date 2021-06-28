
module Api
  module V1
    class RelationshipsController < ApplicationController
      #before_action :correct_user, only: [:create, :destroy]
      before_action :current_user, only: [:create, :destroy, :is_follow]
      def create
        other_user = User.find(params[:id])
        if @current_user && other_user
          @current_user.follow(other_user)
          @current_user.create_notification_follow!(params[:id])
          render json: {}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def destroy
        other_user = User.find(params[:id])
        if @current_user && other_user
          @current_user.unfollow(other_user)
          render json: {}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def is_follow
        other = User.find(params[:id])
        render json: { isFollow: @current_user.following?(other)}, status: :ok
      end
    end
  end
end
