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
      travel -360.day do #360日前に遡って10000p登録
        expect{
          post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:10000}
        }.to change{ @user.book_user_reads.count }.by(+1)
      end
      travel -4.day do #4日前に遡って120p登録
        expect{
          post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:120}
        }.to change{ @user.book_user_reads.count }.by(+1)
      end
      #今日,本２冊,合計512p登録
      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:212}
      }.to change{ @user.book_user_reads.count }.by(+1)

      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:300}
      }.to change{ @user.book_user_reads.count }.by(+1)


      #todayが10632p, 4日前は10120p,それ以前は10000pであるべき
      get "/api/v1/graph_data/#{@user.id}"
      res = JSON.parse(response.body)

      expect(res['today']['page']).to eq(10632) #ページ数
      expect(res['today']['amount_book']).to eq(4)    #冊数
      expect(res['four']['page']).to eq(10120)
      expect(res['four']['amount_book']).to eq(2)
    end
  end

  describe "Get /month_data/:id" do
    it "return month_data" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      travel -30.day do #先月に遡って１冊、10000p登録
        expect{
          post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:10000}
        }.to change{ @user.book_user_reads.count }.by(+1)
      end
      travel -4.day do #4日前に遡って120p登録
        expect{
          post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:120}
        }.to change{ @user.book_user_reads.count }.by(+1)
      end
      #今日,本２冊,合計512p登録
      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:212}
      }.to change{ @user.book_user_reads.count }.by(+1)

      expect{
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8", page:300}
      }.to change{ @user.book_user_reads.count }.by(+1)

      #todayが10632p, 4日前は10120p,それ以前は10000pであるべき
      get "/api/v1/month_data/#{@user.id}"
      res = JSON.parse(response.body)

      expect(res['last_month']['page']).to eq(10000) #ページ数
      expect(res['last_month']['amount_book']).to eq(1)    #冊数
      expect(res['this_month']['page']).to eq(632)
      expect(res['this_month']['amount_book']).to eq(3)
    end
  end
end
