class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  has_many :likes

  VALID_ISBN_REGEX = /\A[\d-]{9,18}\z/
  validates :book_isbn, presence: true, length: { maximum: 20 },
                  format: { with: VALID_ISBN_REGEX }
end
