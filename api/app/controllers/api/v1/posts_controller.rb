module Api
  module V1
    class PostsController < ApplicationController
      before_action :current_user, only: [:create, :destroy, :update, :timeline]

      def create
        post = @current_user.posts.new(user_name: @current_user.name, book_isbn: params[:book_isbn], impression: params[:impression])
        if post.save
          render json: { post: post }, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def destroy
        if post = @current_user.posts.find(params[:post_id])
          post.delete
          render json: {}, status: :ok
        else
          render json: { message: "投稿の削除に失敗しました。"}, status: :internal_server_error
        end
      end

      def update
        post = Post.find(params[:post_id])
        if post
          post.update_attribute(:impression, params[:impression])
          render json: { post: post}, status: :ok
        else
          render json: { message: "投稿の編集に失敗しました。"}, status: :internal_server_error
        end
      end

      def index

      end

      def timeline
        timeline = @current_user.get_timeline
        render json: {
          timeline: timeline
        }, stauts: :ok
      end

    end
  end
end
