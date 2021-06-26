module Api
  module V1
    class NotificationsController < ApplicationController
      before_action :current_user

      def get_notification
        notifications = @current_user.passive_notifications
        notifications.where(checked: false).each do |notice|
          notice.update_attribute(:checked, true)
        end

        notices = notifications.where.not(visitor_id: @current_user.id)

        render json: {
          notices: notices
        }, status: :ok
      end

    end
  end
end
