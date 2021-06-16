require 'rails_helper'

RSpec.describe BookUserRead, type: :model do
  before do
    @user = User.create(
      name: "test", email: "game4967@gmail.com",
      password: "aaaa1234", password_confirmation: "aaaa1234")
    @read = @user.book_user_reads.new(book_id: 1)
  end

  describe 'register book' do
    it 'valid, success' do
      expect(@read.save).to be true
    end
  end
end
