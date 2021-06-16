require 'rails_helper'
require 'json'

RSpec.describe "Sessions", type: :request do
  before do
    @user = User.create(
        email: "aaa@gmail.com",
        password: "testpass",password_confirmation: "testpass",
        name: "taro"
        )
  end

  describe 'Login' do
    it 'success, response ok' do
      #Login
      post "/api/v1/login", params: { session: { email: @user.email, password: @user.password}} #,
                                            #remember_me: '1' }}

      expect(response).to have_http_status(:success)
      res = JSON.parse(response.body)
      expect(res['user']['email']).to eq(@user.email)
      expect(res['logged_in']).to be true
    end

    it 'failed, response error message' do
      post "/api/v1/login", params: { session: { email: "wrongemail", password: @user.password}} #,

      res = JSON.parse(response.body)
      expect(res['message']).not_to be_empty
    end
  end

  it 'Login' do
    #Login
    post "/api/v1/login", params: { session: { email: @user.email,password: @user.password}} #,
                                          #remember_me: '1' }}

    delete "/api/v1/logout"

    #Assert
    res = JSON.parse(response.body)
    expect(response).to have_http_status(:success)
    expect(res['logged_in']).to be false

  end
end
