require 'rails_helper'

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
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "978-4-00-310101-8"}
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
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "ajf"}
      }.to change{ @user.book_user_reads.count }.by(0)
      #Destroy
      expect{ #いったん本を登録
        post "/api/v1/book_user_reads", params: { id: @user.id, book_isbn: "1234567890"}
      }.to change{ @user.book_user_reads.count }.by(1)
      expect{ #登録してない本を消そうとする
        delete "/api/v1/book_user_reads/#{@user.id}" , params: { book_isbn: "2"}
      }.to change{ @user.book_user_reads.count }.by(0)
    end
  end
end
