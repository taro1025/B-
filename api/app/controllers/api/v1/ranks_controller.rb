
module Api
  module V1
    class RanksController < ApplicationController
      before_action :correct_user, only: [:create, :destroy]

      def create
        rank = @user.ranks.new(medium_url: params[:medium_url], url: params[:url], book_isbn: params[:book_isbn], rank: params[:rank_id].to_i)
        puts rank.errors.full_messages
        if rank.save
          render json: { rank: rank.rank}, status: :ok
        else
          puts rank.errors.full_messages
          render json: {}, status: :internal_server_error
        end
      end

      def destroy
        if rank = @user.ranks.find_by(book_isbn: params[:book_isbn])
          rank.delete
          render json: {}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end


      #ユーザーの読んだ本をラング分けして返す
      def show
        user = User.find(params[:id])
        s = user.ranks.where(rank: 5)
        a = user.ranks.where(rank: 4)
        b = user.ranks.where(rank: 3)
        c = user.ranks.where(rank: 2)
        d = user.ranks.where(rank: 1)
        sum = s.length + a.length + b.length + c.length + d.length
        render json: {s: s, a: a, b: b, c: c, d: d, sum: sum}, status: :ok
      end

      def get_rank
        user = User.find(params[:id])
        if rank = user.ranks.find_by(book_isbn: params[:book_isbn])
          render json: {rank: rank}, status: :ok
        else
          render json: {}, status: :internal_server_error
        end
      end

    end
  end
end
