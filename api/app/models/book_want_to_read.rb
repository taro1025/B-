class BookWantToRead < ApplicationRecord
  default_scope -> { order(created_at: :desc) }
  belongs_to :user

  VALID_ISBN_REGEX = /\A[\d-]{9,18}\z/
  validates :book_isbn, presence: true, length: { maximum: 20 },
                  format: { with: VALID_ISBN_REGEX }
end
