
module Api
  module V1
    class RanksController < ApplicationController
      before_action :correct_user, only: [:create, :destroy]

      def create
        rank = @user.ranks.new(url: params[:url], book_isbn: params[:book_isbn], rank_id: params[:rank_id].to_i)
        if rank.save
          render json: { rank: rank.rank_id}, status: :ok
        else
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

      def index
      end

      def show
        user = User.find(params[:id])
        s = user.ranks.where(rank_id: 5)
        a = user.ranks.where(rank_id: 4)
        b = user.ranks.where(rank_id: 3)
        c = user.ranks.where(rank_id: 2)
        d = user.ranks.where(rank_id: 1)
        sum = s.length + a.length + b.length + c.length + d.length
        render json: {s: s, a: a, b: b, c: c, d: d, sum: sum}, status: :ok
      end

    end
  end
end
