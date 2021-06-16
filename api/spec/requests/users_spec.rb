require 'rails_helper'

RSpec.describe "Users", type: :request do
  before do
    @user = User.new(
      name: "test", email: "game4967@gmail.com",
      password: "aaaa1234", password_confirmation: "aaaa1234")
  end
  describe "GET /index" do

  end

  describe "POST /create" do
    it 'response status ok' do
      expect{
        post "/api/v1/users", params: {
          user: {
            name: "taro",
            email: "game4967@gmail.com",
            password: "aaaa1234",
            password_confirmation: "aaaa1234"
        }}
      }.to change{ User.count }.by(+1)

      expect(response).to have_http_status(200)
    end

    it 'response status 500' do
      expect{
        post "/api/v1/users", params: {
          user: { #パスワードが間違ってる
            name: "taro",
            email: "game4967@gmail.com",
            password: "a1234",
            password_confirmation: "aaaa1234"
        }}
      }.to change{ User.count }.by(0)

      res = JSON.parse(response.body)
      expect(res['message']).to eq("ユーザーの新規登録失敗")

      expect(response).to have_http_status(500)
    end
  end
end
