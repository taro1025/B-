module Types
  class QueryType < Types::BaseObject
    #graphqlはページングにconnectionsというものがあるらしい
    field :users, [Types::UserType], null: false
    def users
      User.all
    end
  end
end
