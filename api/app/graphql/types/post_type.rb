module Types
  class PostType < Types::BaseObject
    field :id, ID, null: false
    field :user_id, Integer, null: false
    field :impression, String, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :book_isbn, String, null: true
    field :user_name, String, null: true
    field :url, String, null: true
    field :medium_url, String, null: true
    field :title, String, null: true
    field :rank_id, Integer, null: true

    field :user, UserType, null: true
    field :comments, [Types::CommentType], null: false
    field :rank, RankType, null: true
  end
end
