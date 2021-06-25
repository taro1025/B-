
module Api
  module V1
    class BookUserReadsController < ApplicationController
      before_action :current_user, only: [:create, :destroy]
      before_action :correct_user, only: [:show]
      def create
        read_book = @current_user.book_user_reads.new(book_isbn: params[:book_isbn])
        if read_book.save
          update_amount
          render json: {}, status: :ok
        else
          render json: {
            message: "読んだ本の登録に失敗しました。再度、登録をお試しください。"
          },status: :internal_server_error
        end
      end

      def destroy
        if book_user_read = @current_user.book_user_reads.find_by(book_isbn: params[:book_isbn])
          book_user_read.delete
          render json: {}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

      def show

        if books = @user.book_user_reads
          render json: {books: books}, status: :ok
        else
          render json: {message:"読みたい本に登録されている本はありません。"}, status: :internal_server_error
        end
      end

      private
      #値は適当。params[:amount_page]でフロントからページ数を受け取りたい。
        def update_amount
          amount_book = @current_user.amount_book || @current_user.create_amount_book
          amount_book.camulative_page_now += 231
          amount_book.amount_page_this += 231
          amount_book.amount_book_this += 1
          amount_book.save
        end
    end
  end
end
