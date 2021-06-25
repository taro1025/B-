
module Api
  module V1
    class BookUserReadsController < ApplicationController
      before_action :current_user, only: [:create, :destroy]
      before_action :correct_user, only: [:show]
      def create
        read_book = @current_user.book_user_reads.new(
                  book_isbn: params[:book_isbn], page: params[:page])
        if read_book.save
          #update_amount
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

      def get_graph_data
        records = []
        today = Date.today
        #4日前時点、８日前時点、、、２８日前時点の累計ページ数を取得
        8.times do |n|
          records << get_spacify_record(today - (4*(n-1)))
        end
        render json: {
          today: records[0],
          four: records[1],
          eight: records[2],
          twelve: records[3],
          six_teen: records[4],
          twenty: records[5],
          twenty_four: records[6],
          twenty_eight: records[7]
        },status: :ok
      end

      private

        def get_spacify_record(end_day)
          user = User.find(params[:id])
          start_day = user.book_user_reads.first.created_at
          books = user.book_user_reads.where("updated_at BETWEEN ? AND ?", start_day, end_day)
          page = 0
          books.each do |book|
            page += book.page
          end

          page

        end
    end
  end
end
