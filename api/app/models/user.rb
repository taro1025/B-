class User < ApplicationRecord
  before_save :downcase_email
  mount_uploader :image, ImageUploader

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, length: { maximum: 255 },
                  format: { with: VALID_EMAIL_REGEX }, uniqueness: true

  has_secure_password
  validates :password, presence: true, length: { minimum: 8 }, allow_nil: true

  has_many :book_user_reads, dependent: :destroy
  has_many :book_want_to_reads, dependent: :destroy
  has_many :ranks, dependent: :destroy
  has_many :book_user_favorites, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :likes, dependent: :destroy #:likes, through: :posts, dependent: :destroy
  has_many :active_relationships, class_name: "Relationship",
                                  foreign_key: "follower_id",
                                  dependent: :destroy
  has_many :following, through: :active_relationships, source: :followed
  has_many :passive_relationships, class_name:  "Relationship",
                                  foreign_key: "followed_id",
                                  dependent:   :destroy
  has_many :followers, through: :passive_relationships, source: :follower

  #active_notifications：自分からの通知
  #passive_notifications：相手からの通知
  has_many :active_notifications, class_name: 'Notification', foreign_key: 'visitor_id', dependent: :destroy
  has_many :passive_notifications, class_name: 'Notification', foreign_key: 'visited_id', dependent: :destroy


  def follow(other_user)
    following << other_user
  end


  def unfollow(other_user)
    active_relationships.find_by(followed_id: other_user.id).destroy
  end


  def following?(other_user)
    following.include?(other_user)
  end

  def create_notification_follow!(other_user_id)
    temp = Notification.where(["visitor_id = ? and visited_id = ? and action = ? ", id, other_user_id, 'follow'])
    if temp.blank?
      notification = active_notifications.new(
        visited_id: other_user_id,
        action: 'follow'
      )
      notification.save if notification.valid?
    end
  end

  def get_timeline
    following_ids = "SELECT followed_id FROM relationships
                     WHERE follower_id = :user_id"
    Post.where("user_id IN (#{following_ids})
                     OR user_id = :user_id", user_id: id)
  end

   private
    def downcase_email
      self.email = email.downcase
    end


end
