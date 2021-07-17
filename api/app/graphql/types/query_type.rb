module Types
  class QueryType < Types::BaseObject
    #graphqlはページングにconnectionsというものがあるらしい
    field :users, [Types::UserType], null: false
    def users
      User.all
    end

    field :timeline, [PostType], null: true, method: :get_timeline do
      description "Find a post by ID"
      #argument :id, ID, required: true
    end

    def timeline
      if user = context[:current_user]
        post = user.get_timeline

      end
    end

    field :get_comment, [CommentType], null: false do
      argument :post_id, ID, required: true
    end

    def get_comment(post_id:)
      post = Post.find(post_id)
      post.comments
    end

    field :rank, RankType, null: false do
      argument :user_id, ID, required: true
      argument :book_isbn, Integer, required: true
    end

    def rank(**arg)
      rank = Rank.find_by(id: arg[:user_id], book_isbn: arg[:book_isbn])
    end
  end
end

#query {
#  users {
#    name
#    id
#  }
#}
