module Api
  module V1
    class NotificationsController < ApplicationController
      before_action :current_user

      def get_notification
        notice = @current_user.active_notifications.all

        render json: {
          notice: notice
        }, status: :ok
      end

    end
  end
end
