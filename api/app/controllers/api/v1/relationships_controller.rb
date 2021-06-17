
module Api
  module V1
    class RelationshipsController < ApplicationController
      #before_action :correct_user, only: [:create, :destroy]
      before_action :current_user, only: [:create, :destroy]
      def create
        other_user = User.find(params[:id])
        if @current_user && other_user
          @current_user.follow(other_user)
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
    end
  end
end
