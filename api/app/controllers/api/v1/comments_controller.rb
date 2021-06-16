
module Api
  module V1
    class CommentsController < ApplicationController
      before_action :correct_user, only: [:create, :destroy, :update]

      def create
        post = Post.find(params[:post_id])
        comment = post.comments.new(comment: params[:comment], user_id: params[:id])
        if comment.save
          render json: { comment: comment }, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def destroy
        if comment = Comment.find(params[:comment_id])
          comment.delete
          render json: {}, status: :ok
        else
          render json: { message: "コメントの削除に失敗しました。"}, status: :internal_server_error
        end
      end

      def update
        comment = Comment.find(params[:comment_id])
        if comment
          comment.update_attribute(:comment, params[:comment])
          render json: { comment: comment}, status: :ok
        else
          render json: { message: "コメントの編集に失敗しました。"}, status: :internal_server_error
        end
      end

      def index
      end

    end
  end
end
