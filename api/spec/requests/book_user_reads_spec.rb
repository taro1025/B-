require 'rails_helper'

RSpec.describe "BookUserReads", type: :request do
  before do
    @user = User.create(
      name: "test", email: "game4967@gmail.com",
      password: "aaaa1234", password_confirmation: "aaaa1234")
    @read = @user.book_user_reads.new(book_id: 1)
  end

  describe "create" do
    it "success" do
      post "/api/v1/book_user_reads", params: {book_id: 214}
end
