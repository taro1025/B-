module Types
  class CommentType < Types::BaseObject
    field :id, ID, null: false
    field :post_id, Integer, null: false
    field :user_id, Integer, null: false
    field :comment, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :user_name, String, null: true

    field :user, UserType, null: true
    field :post, PostType, null: true
  end
end
