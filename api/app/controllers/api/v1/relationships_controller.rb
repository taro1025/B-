
module Api
  module V1
    class RelationshipsController < ApplicationController
      #before_action :correct_user, only: [:create, :destroy]
      before_action :current_user, only: [:follow, :unfollow]
      def follow
        if @current_user
          @current_user.follow(params[:id])
          render json: {}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def unfollow
        if @current_user
          @current_user.unfollow(params[:id])
          render json: {}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end
    end
  end
end
