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

      #isbnによる本の取得
      def show
        posts = @user.posts.where(book_isbn: params[:book_isbn])
        if posts && params[:book_isbn]
          render json: { posts: posts}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      #post.idによる本の取得
      def get_post
        post = Post.where(id: params[:id])
        get_post_set(post)
        if post
          render json: {
            post: post,
            comments: @comments,
            ranks: @ranks,
            users: @users
            }, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end



      def timeline
        timeline = @current_user.get_timeline
        get_post_set(timeline)

        render json: {
          timeline: timeline,
          comments: @comments,
          ranks: @ranks,
          users: @users
        }, stauts: :ok
      end


      private

        #ポストを引数に受け取りグローバル変数でそのポストのランク、コメントを返す
        def get_post_set(posts)
          @comments = []
          @ranks = []
          @users = {}
          ids = []
          posts.each do |post|
            if comments = Comment.where(post_id: post.id)
              users = []
              comments.each do |comment|
                users << User.find(comment.user_id)
              end
              @comments << { comment: comments, users: users}
            end
            if rank = Rank.find_by(book_isbn: post.book_isbn, user_id: post.user_id)
              @ranks << rank
            else
              @ranks << []
            end
            unless ids.include?(post.user_id)
              ids << post.user_id
              user = User.find(post.user_id)
              @users["#{post.user_id}"] = user
            end
          end
        end

    end
  end
end
