module Api
  module V1
    class BookWantToReadsController < ApplicationController
      before_action :correct_user, only: [:create, :destroy]

      def create
        if @user.book_want_to_reads.create(book_isbn: params[:book_isbn])
          render json: {}, status: :ok
        else
          render json: {
            message: "読んだ本の登録に失敗しました。再度、登録をお試しください。"
          },status: :internal_server_error
        end
      end

      def destroy
        if book_want_to_read = @user.book_want_to_reads.find_by(book_isbn: params[:book_isbn])
          book_want_to_read.delete
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
