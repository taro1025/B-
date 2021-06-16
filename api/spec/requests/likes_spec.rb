require 'rails_helper'

#ちゃんといいね できること
#2回いいね同じ投稿にいいね はできないこと
#2回いいね を消すやつをできないこと
RSpec.describe "Likes", type: :request do
  before do
    @user = User.create(
      name: "test", email: "game4967@gmail.com",
      password: "aaaa1234", password_confirmation: "aaaa1234")
    @post = @user.posts.create(impression: "omosiroi", book_isbn: "1234567890")
  end
  describe "Post Create, Delete Destroy" do
    it "should response ok" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}

      expect{
        post "/api/v1/likes", params: { post_id: @post.id }
      }.to change{ @user.likes.count }.by(+1)

      expect{
        delete "/api/v1/likes/#{@post.id}"
      }.to change{ @user.likes.count }.by(-1)
    end
  end

  describe "Post Delete Twice" do
    it "should be failed" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}

      expect{
        post "/api/v1/likes", params: { post_id: @post.id }
      }.to change{ @user.likes.count }.by(+1)
      expect{
        post "/api/v1/likes", params: { post_id: @post.id }
      }.to change{ @user.likes.count }.by(0)

      expect{
        delete "/api/v1/likes/#{@post.id}"
      }.to change{ @user.likes.count }.by(-1)
      expect{
        delete "/api/v1/likes/#{@post.id}"
      }.to change{ @user.likes.count }.by(0)
    end
  end
end
