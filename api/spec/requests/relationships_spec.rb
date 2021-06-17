require 'rails_helper'

RSpec.describe "Relationships", type: :request do
  before do
    @taro = User.create(
        email: "aaa@gmail.com",
        password: "testpass",password_confirmation: "testpass",
        name: "taro"
        )
    @jiro = User.create(
        email: "bbb@gmail.com",
        password: "testpass",password_confirmation: "testpass",
        name: "jiro"
        )
  end

  describe "taro follow jiro" do
    it "should be success " do
      #Login
      post "/api/v1/login", params: { session: { email: @taro.email,password: @taro.password}}

      expect{
        post "/api/v1/relationships", params: { id: @jiro.id}
      }.to change{ @taro.following.count}.by(+1)
    end
  end

  describe "taro unfollow jiro" do
    it "should be success" do
      #Login
      post "/api/v1/login", params: { session: { email: @taro.email,password: @taro.password}}
      #follow
      @taro.follow(@jiro)
      #unfollow
      expect{
        delete "/api/v1/relationships/#{@jiro.id}"
      }.to change{ @taro.following.count}.by(-1)
    end
  end

  describe "jiro follow unfollow taro" do
    it "should be success" do
      expect{@jiro.follow(@taro)}.to change{ @jiro.following.count}.by(+1)
      expect{@taro.follow(@jiro)}.to change{ @taro.following.count}.by(+1)
      expect{@jiro.unfollow(@taro)}.to change{ @jiro.following.count}.by(-1)
      expect{@taro.unfollow(@jiro)}.to change{ @taro.following.count}.by(-1)
    end
  end
end
