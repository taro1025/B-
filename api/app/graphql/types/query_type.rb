module Types
  class QueryType < Types::BaseObject
    #graphqlはページングにconnectionsというものがあるらしい
    field :users, [Types::UserType], null: false
    def users
      User.all
    end

    field :timeline, PostType, null: true do
      description "Find a post by ID"
      #argument :id, ID, required: true
    end

    def timeline
      if user = context[:current_user]
        #posts = user.get_timeline

      end
      "ok"
    end
  end
end

#query {
#  users {
#    name
#    id
#  }
#}
