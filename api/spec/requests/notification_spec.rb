#require 'rails_helper'
#require 'json'
#
#RSpec.describe Notification, type: :request do
#  before do
#    @user = User.create(
#      name: "test", email: "game4967@gmail.com",
#      password: "aaaa1234", password_confirmation: "aaaa1234")
#    @post = @user.posts.create(impression: "omosiroi", book_isbn: "1234567890")
#    @jiro = User.create(
#      name: "jiro", email: "game1111@gmail.com",
#      password: "aaaa1234", password_confirmation: "aaaa1234")
#    @jiro_post = @jiro.posts.new(impression: "omosiroi", book_isbn: "1234567890")
#  end
#
#  describe "Like" do
#    it "send notification" do
#      #Login
#      post "/api/v1/login", params: { session: { email: @jiro.email,password: @jiro.password}}
#
#      expect{
#        post "/api/v1/likes", params: { post_id: @post.id }
#      }.to change{ Notification.count }.by(+1)
#
#      expect(Notification.find_by(visited_id: @jiro.id, post_id: @post.id, action: "like"))
#    end
#  end
#
#  describe "Comment" do
#    it "send notification" do
#      #Login
#      post "/api/v1/login", params: { session: { email: @jiro.email,password: @jiro.password}}
#
#      expect{
#        post "/api/v1/comments", params: {
#            id: @jiro.id, post_id: @post.id,
#            comment: "とても面白かった"
#            }
#      }.to change{ Notification.count }.by(+1)
#
#      res = JSON.parse(response.body)
#      expect(Notification.find_by(visited_id: @jiro.id, comment_id: res['comment']['id'], post_id: @post.id, action: "comment"))
#    end
#  end
#  describe "Follow" do
#    it "send notification" do
#      #Login
#      post "/api/v1/login", params: { session: { email: @jiro.email,password: @jiro.password}}
#
#      expect{
#        post "/api/v1/relationships", params: { id: @user.id}
#      }.to change{ Notification.count }.by(+1)
#
#      expect(Notification.find_by(visited_id: @jiro.id, action: "follow"))
#    end
#  end
#end
