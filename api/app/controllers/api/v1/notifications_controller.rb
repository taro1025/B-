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
        notices_with_name = []
        notices.each do |notice|
          if notice.action == 'like' || 'comment'
            post = Post.find_by(id: notice.post_id)
            notices_with_name << {notice: notice, name: notice.visitor.name, post: post}
          else
            notices_with_name << {notice: notice, name: notice.visitor.name}
          end
        end
        render json: {
          notices: notices_with_name
        }, status: :ok
      end

    end
  end
end
