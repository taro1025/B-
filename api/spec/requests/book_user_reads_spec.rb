require 'rails_helper'
require 'json'

RSpec.describe "BookUserReads", type: :request do
  before do
    @user = User.create(
      name: "test", email: "game4967@gmail.com",
      password: "aaaa1234", password_confirmation: "aaaa1234")
    @read = @user.book_user_reads.new(book_isbn: "1")
  end

  describe "create and destroy" do
    it "success" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page: 212}
      }.to change{ @user.book_user_reads.count }.by(+1)

      expect{
        delete "/api/v1/book_user_reads/#{@user.id}" , params: { book_isbn: "978-4-00-310101-8"}
      }.to change{ @user.book_user_reads.count }.by(-1)
    end

    it "failed with inalid value" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      #Create (存在しない本)
      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "ajf", page:212}
      }.to change{ @user.book_user_reads.count }.by(0)
      #Destroy
      expect{ #いったん本を登録
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "1234567890", page:212}
      }.to change{ @user.book_user_reads.count }.by(1)
      expect{ #登録してない本を消そうとする
        delete "/api/v1/book_user_reads/#{@user.id}" , params: { book_isbn: "2"}
      }.to change{ @user.book_user_reads.count }.by(0)
    end
  end

  describe "can be registerd more twice" do
    it "should be createtd" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      #1times
      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:212}
      }.to change{ @user.book_user_reads.count }.by(+1)
      #2times
      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:212}
      }.to change{ @user.book_user_reads.count }.by(+1)
    end
  end

  describe 'GET /graph_data/:id' do
    it "return graph data" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      #1times
      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:212}
      }.to change{ @user.book_user_reads.count }.by(+1)
      #2times
      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:300}
      }.to change{ @user.book_user_reads.count }.by(+1)
      #todayが512pそれ以前は0であるべき
      get "/api/v1/graph_data/#{@user.id}"
      res = JSON.parse(response.body)
      puts res['today']
      expect(res['today']).to eq(512)
    end
  end
end
