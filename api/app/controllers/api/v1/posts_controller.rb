module Api
  module V1
    class PostsController < ApplicationController
      before_action :current_user, only: [:create, :destroy, :update, :timeline]
      before_action :correct_user, only: [:show]
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
        posts = Post.where(book_isbn: params[:book_isbn])
        if posts && params[:book_isbn]
          render json: { posts: posts}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def show
        posts = @user.posts.where(book_isbn: params[:book_isbn])
        if posts && params[:book_isbn]
          render json: { posts: posts}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def timeline
        timeline = @current_user.get_timeline
        comments = []
        timeline.each do |post|
          if comment = Comment.where(post_id: post.id)
            comments << comment
          end
        end
        render json: {
          timeline: timeline,
          comments: comments
        }, stauts: :ok
      end

    end
  end
end
