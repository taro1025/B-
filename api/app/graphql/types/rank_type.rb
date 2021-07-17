module Types
  class RankType < Types::BaseObject
    field :id, ID, null: false
    field :rank_id, Integer, null: false
    field :user_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :book_isbn, String, null: true
    field :url, String, null: true
    field :medium_url, String, null: true
    field :title, String, null: true

    field :user, UserType, null: true
  end
end
