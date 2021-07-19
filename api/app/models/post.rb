class Post < ApplicationRecord
  default_scope -> { order(created_at: :desc) }
  belongs_to :user
  has_many :comments
  has_many :likes
  has_many :notifications, dependent: :destroy
  belongs_to :rank

  VALID_ISBN_REGEX = /\A[\d-]{9,18}\z/
  validates :book_isbn, presence: true, length: { maximum: 20 },
                  format: { with: VALID_ISBN_REGEX }


  def create_notification_like!(current_user)
  # いいねされていない場合のみ、通知レコードを作成
  #いいねボタンを連打した場合、押した数だけ相手に通知がいってしまいます。
    if Notification.where(
      ["visitor_id = ? and visited_id = ? and post_id = ? and action = ? ", current_user.id, user_id, id, 'like']).blank?
      notification = current_user.active_notifications.new(
        post_id: id,
        visited_id: user_id,
        action: 'like'
      )
    # 自分の投稿に対するいいねの場合は、通知済みとする
      if notification.visitor_id == notification.visited_id
        notification.checked = true
      end
      notification.save if notification.valid?
    end
  end


  #def create_notification_comment!(current_user, comment_id)
  #  # 自分以外にコメントしている人をすべて取得し、全員に通知を送る
  #  temp_ids = Comment.select(:user_id).where(post_id: id).where.not(user_id: current_user.id).distinct
  #  temp_ids.each do |temp_id|
  #    save_notification_comment!(current_user, comment_id, temp_id['user_id'])
  #  end
  #  # まだ誰もコメントしていない場合は、投稿者に通知を送る
  #  save_notification_comment!(current_user, comment_id, user_id) if temp_ids.blank?
  #end

  def save_notification_comment!(current_user, comment_id)
    # コメントは複数回することが考えられるため、１つの投稿に複数回通知する
    notification = current_user.active_notifications.new(
      post_id: id,
      comment_id: comment_id,
      visited_id: user_id,
      action: 'comment'
    )
    # 自分の投稿に対するコメントの場合は、通知済みとする
    if notification.visitor_id == notification.visited_id
      notification.checked = true
    end
    notification.save if notification.valid?
  end
end
