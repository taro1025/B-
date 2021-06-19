
module Api
  module V1
    class RanksController < ApplicationController
      before_action :correct_user, only: [:create, :destroy]

      def create
        rank = @user.ranks.new(book_isbn: params[:book_isbn], rank_id: params[:rank_id].to_i)
        if rank.save
          render json: {}, status: :ok
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

    end
  end
end
