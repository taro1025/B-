require 'rails_helper'
require 'json'


RSpec.describe "Comments", type: :request do
  before do
    @user = User.create(
      name: "test", email: "game4967@gmail.com",
      password: "aaaa1234", password_confirmation: "aaaa1234")
    @post = @user.posts.create(impression: "omosiroi", book_isbn: "1234567890")
  end
  describe "has been commented with valid value" do
    it "should be created and can destroy" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}

      expect{
        post "/api/v1/comments", params: {
                    id: @user.id, post_id: @post.id,
                    comment: "とても面白かった"
                    }
      }.to change{ @post.comments.count }.by(+1)

      res = JSON.parse(response.body)

      expect{
        delete "/api/v1/comments/#{@user.id}", params: {
                    comment_id: res['comment']['id']
        }
      }.to change{ @post.comments.count }.by(-1)
    end
  end

  describe "can be edited" do
    it "should be rewite" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      #Create
      post "/api/v1/comments", params: {
                    id: @user.id, post_id: @post.id,
                    comment: "とても面白かった"
                    }
      res = JSON.parse(response.body)
      patch "/api/v1/comments/#{@user.id}", params: {
                    comment_id: res['comment']['id'],
                    comment: "非常に面白かった"
                    }

      comment = Comment.find(res['comment']['id'])
      expect(comment.comment).to eq("非常に面白かった")
    end
  end
end
