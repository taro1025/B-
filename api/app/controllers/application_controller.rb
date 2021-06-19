class ApplicationController < ActionController::API
  include ActionController::Cookies

  def current_user
    if user_id = session[:user_id]
      @current_user = User.find_by(id: user_id)
    end
  end

  def correct_user
    @user = User.find(params[:id]) #ページの持ち主
    unless @user == current_user
      render json: {
        message: "他ユーザーの情報を書き換えてはいけません。"
      },status: :internal_server_error
    end
  end
end
