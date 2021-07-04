require 'rails_helper'

RSpec.describe "Ranks", type: :request do
  before do
    @user = User.create(
      name: "test", email: "game4967@gmail.com",
      password: "aaaa1234", password_confirmation: "aaaa1234")

  end

  describe "create and destroy" do
    it "success" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      expect{
        post "/api/v1/ranks", params: { id: @user.id, book_isbn: "978-4-00-310101-8", rank_id: 1}
      }.to change{ @user.ranks.count }.by(+1)

      expect{
        delete "/api/v1/ranks/#{@user.id}" , params: { book_isbn: "978-4-00-310101-8"}
      }.to change{ @user.ranks.count }.by(-1)
    end

    it "failed with inalid value" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      #Create (存在しないrank)
      expect{
        post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567890", rank_id: 6}
      }.to change{ @user.ranks.count }.by(0)
      #Destroy
      expect{ #いったん本のランク登録
        post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567890", rank_id: 1}
      }.to change{ @user.ranks.count }.by(1)
      expect{ #登録してない本を消そうとする
        delete "/api/v1/ranks/#{@user.id}" , params: { book_isbn: "978-4-00-310101-8"}
      }.to change{ @user.ranks.count }.by(0)
    end
  end

  describe "create 0~6" do
    it "valid 0~5, invalid 6" do
     #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}

      post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567890", rank_id: 0}
      expect(response).to have_http_status(:success)

      post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567891", rank_id: 1}
      expect(response).to have_http_status(:success)#1

      post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567892", rank_id: 2}
      expect(response).to have_http_status(:success)#2

      post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567893", rank_id: 3}
      expect(response).to have_http_status(:success)#3

      post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567894", rank_id: 4}
      expect(response).to have_http_status(:success)#4

      post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567895", rank_id: 5}
      expect(response).to have_http_status(:success)#5

      post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567896", rank_id: 6}
      expect(response).to have_http_status(500)
    end
  end

  describe "cannot create Rank with same books" do
    it "response 500" do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}}
      post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567890", rank_id: 1}
      expect(response).to have_http_status(:success)
      post "/api/v1/ranks", params: { id: @user.id, book_isbn: "1234567890", rank_id: 5}
      expect(response).to have_http_status(500)
    end
  end
end
