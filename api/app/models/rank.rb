class Rank < ApplicationRecord
  belongs_to :user

  validates :rank_id,
    presence: true,
    numericality: { greater_than: 0, less_than: 6 }

  validates :user_id, uniqueness: { scope: :book_isbn }

end
