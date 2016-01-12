class WelcomeController < ApplicationController
  def login
  end

  def validate
    user = User.find_by({email: params["username"], password: params["password"]})
    flash[:notice] = "Username or Password error, please input correct one"
    if user.nil?
      render "login"
    else
      # redirect_to course_path
    end
  end

  def signup
  end
end