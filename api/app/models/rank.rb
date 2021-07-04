class Rank < ApplicationRecord
  default_scope -> { order(created_at: :desc) }
  belongs_to :user

  validates :rank_id,
    presence: true,
    numericality: { greater_than: -1, less_than: 6 }

  validates :user_id, uniqueness: { scope: :book_isbn }

end
