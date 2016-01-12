class WelcomeController < ApplicationController
  def login
  end

  def validate
    user = User.find_by({email: params["username"], password: params["password"]})
    if user.nil?
      flash[:notice] = "Username or Password error, please input correct one"
      render "login"
    else
      # redirect_to course_path
    end
  end

  def signup
  end

  def create_user
    user = User.create({email: params["username"], password: params["password"]})
    if user.nil?
      flash[:notice] = "Sign Up failed, please try again"
      render "signup"
    else
      # redirect_to course_path
    end
  end
end