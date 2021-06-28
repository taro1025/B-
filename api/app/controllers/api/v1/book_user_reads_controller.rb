
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
          render json: {book: read_book}, status: :ok
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
        start_day = BookUserRead.where(user_id: params[:id]).first.created_at #@user.book_user_reads.first.created_at
        records = []
        today = Date.today

        #4日前時点、８日前時点、、、２８日前時点の累計ページ数を取得
        8.times do |n|
          records << get_spacify_record(start_day, today - (4*(n-1)))
        end

        render json: {
          today: {
            page: records[0][0],
            amount_book: records[0][1]
          },
          four: {
            page: records[1][0],
            amount_book: records[1][1]
          },
          eight: {
            page: records[2][0],
            amount_book: records[2][1]
          },
          twelve: {
            page: records[3][0],
            amount_book: records[3][1]
          },
          six_teen: {
            page: records[4][0],
            amount_book: records[4][1]
          },
          twenty: {
            page: records[5][0],
            amount_book: records[5][1]
          },
          twenty_four: {
            page: records[6][0],
            amount_book: records[6][1]
          },
          twenty_eight: {
            page: records[7][0],
            amount_book: records[7][1]
          }
        },status: :ok
      end

      def get_month_data
        records = []

        last_month_start = Date.today.last_month.beginning_of_month
        last_month_end = Date.today.last_month.end_of_month
        this_month_start = Date.today.beginning_of_month
        this_month_end = Date.today.end_of_month

        records << get_spacify_record(last_month_start, last_month_end)
        records << get_spacify_record(this_month_start, this_month_end)

        render json: {
          last_month: {
            page: records[0][0],
            amount_book: records[0][1]
          },
          this_month: {
            page: records[1][0],
            amount_book: records[1][1]
          }
        }, status: :ok
      end

      private

        def get_spacify_record(start_day, end_day)
          user = User.find(params[:id])
          books = user.book_user_reads.where("updated_at BETWEEN ? AND ?", start_day, end_day)
          page = 0
          books.each do |book|
            page += book.page if book.page
          end

          [page, books.length]

        end
    end
  end
end
