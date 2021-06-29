module Api
  module V1
    class LikesController < ApplicationController
      before_action :current_user, only: [:create, :destroy, :check]

      def create
        post = Post.find(params[:post_id])
        like = post.likes.new(user_id: @current_user.id)
        if like.save
          post.create_notification_like!(@current_user)
          render json: {likes: post.likes }, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def destroy
        post = Post.find(params[:id])
        like = post.likes.find_by(user_id: @current_user.id)
        if like
          like.delete
          render json: { likes: post.likes }, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def index
        user = User.find(params[:id])
        if likes = user.likes
          liked_posts = []
          likes.each do |like|
            liked_posts << like.post_id
          end
          render json: { likes: liked_posts}, status: :ok
        end
      end

      def check
        if @current_user.likes.find_by(post_id: params[:post_id])
          render json: { isLiked: true}, status: :ok
        else
          render json: { isLiked: false}, status: :ok
        end
      end
    end
  end
end
