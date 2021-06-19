module Api
  module V1
    class BookUserFavoritesController < ApplicationController
      before_action :correct_user, only: [:create, :destroy]

      def create
        favorite_book = @user.book_user_favorites.new(
                    book_isbn: params[:book_isbn],
                    description_summary: params[:description_summary],
                    description: params[:description])

        if favorite_book.save
          render json: {}, status: :ok
        else
          render json: {
            message: "必読書の登録に失敗しました。再度、登録をお試しください。"
          },status: :internal_server_error
        end
      end

      def destroy
        if book_user_favorite = @user.book_user_favorites.find_by(book_isbn: params[:book_isbn])
          book_user_favorite.delete
          render json: {}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def index
      end
    end
  end
end
