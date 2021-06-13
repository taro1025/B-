require 'rails_helper'

RSpec.describe User, type: :model do
  before do
    @user = User.new(
      name: "test", email: "game4967@gmail.com",
      password: "aaaa1234", password_confirmation: "aaaa1234")
  end

  describe ' invalid email' do
    it 'should not created' do
      @user.update_attribute(:email, "afsdjf134.com")
      expect(@user).not_to be_valid
    end
  end

  describe 'with valid info' do
    it 'should be created' do
      @user.save
      expect(@user).to be_valid
    end
  end
end
