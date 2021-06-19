require 'rails_helper'
require 'json'

#感想のCRUDと
#タイムラインのテスト

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

  describe "GET Timeline" do
    it "valid order" do
      bob =  User.create(
          name: "bob", email: "game1@gmail.com",
          password: "aaaa1234", password_confirmation: "aaaa1234")
      tom =  User.create(
        name: "tom", email: "game2@gmail.com",
        password: "aaaa1234", password_confirmation: "aaaa1234")
      rios =  User.create(
          name: "rios", email: "game3@gmail.com",
          password: "aaaa1234", password_confirmation: "aaaa1234")

      four = bob.posts.create(book_isbn: "0123456789", impression: "4")
      three = tom.posts.create(book_isbn: "0123456789", impression: "3")
      two = @user.posts.create(book_isbn: "0123456789", impression: "2")
      one = bob.posts.create(book_isbn: "0123456789", impression: "1")
      zero = rios.posts.create(book_isbn: "0123456789", impression: "0")

      expect_timeline = []

      expect_timeline << zero
      expect_timeline << one
      expect_timeline << two
      expect_timeline << three
      expect_timeline << four
      @user.follow(bob)
      @user.follow(tom)
      @user.follow(rios)

      expect(@user.get_timeline).to eq(expect_timeline)
    end
  end
end
