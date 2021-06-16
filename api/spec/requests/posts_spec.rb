require 'rails_helper'
require 'json'

RSpec.describe "Posts", type: :request do
  before do
    @user = User.create(
      name: "test", email: "game4967@gmail.com",
      password: "aaaa1234", password_confirmation: "aaaa1234")
  end
  describe "has been posted with valid value" do
    it "should be created and can destroy" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}

      expect{
        post "/api/v1/posts", params: {
                    id: @user.id, book_isbn: "0123456789",
                    impression: "とても面白かった"
                    }
      }.to change{ @user.posts.count }.by(+1)

      res = JSON.parse(response.body)

      expect{
        delete "/api/v1/posts/#{@user.id}", params: {
                    post_id: res['post']['id']
        }
      }.to change{ @user.posts.count }.by(-1)
    end
  end

  describe "can be edited" do
    it "should be rewite" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      #Create
      post "/api/v1/posts", params: {
                    id: @user.id, book_isbn: "0123456789",
                    impression: "とても面白かった"
                    }
      res = JSON.parse(response.body)
      patch "/api/v1/posts/#{@user.id}", params: {
                    post_id: res['post']['id'],
                    impression: "非常に面白かった"
                    }

      post = Post.find(res['post']['id'])
      expect(post.impression).to eq("非常に面白かった")
    end
  end
end
