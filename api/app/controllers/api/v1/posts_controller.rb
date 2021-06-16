module Api
  module V1
    class PostsController < ApplicationController
      before_action :correct_user, only: [:create, :destroy]

      def create
        post = @user.posts.new(book_isbn: params[:book_isbn], impression: params[:impression])
        if post.save
          render json: { post: post }, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def destroy
        if post = @user.posts.find(params[:post_id])
          post.delete
          render json: {}, status: :ok
        else
          render json: { message: "投稿の削除に失敗しました。"}, status: :internal_server_error
        end
      end

      def index
      end

    end
  end
end
