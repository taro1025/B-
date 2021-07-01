module Api
  module V1
    class BookUserFavoritesController < ApplicationController
      before_action :current_user, only: [:create, :destroy, :edit]

      def create
        favorite_book = @current_user.book_user_favorites.new(
                    book_isbn: params[:book_isbn],
                    description_summary: params[:description_summary],
                    description: params[:description],
                    medium_url: params[:medium_url],
                    url: params[:url])

        if favorite_book.save
          render json: {}, status: :ok
        else
          render json: {
            message: "必読書の登録に失敗しました。再度、登録をお試しください。"
          },status: :internal_server_error
        end
      end

      def destroy
        if book_user_favorite = @current_user.book_user_favorites.find_by(book_isbn: params[:book_isbn])
          book_user_favorite.delete
          render json: {}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def show
        user = User.find(params[:id])
        if books = user.book_user_favorites
          render json: {books: books}, status: :ok
        else
          render json: {}, status: :ok
        end
      end

      def edit
        favorite_book = @current_user.book_user_favorites.find(params[:id])
        favorite_book.update_attribute(:description_summary, params[:summary]) if params[:summary]
        favorite_book.update_attribute(:description, params[:description]) if params[:description]
        render json: { edited: favorite_book}, status: :ok
      end

    end
  end
end
