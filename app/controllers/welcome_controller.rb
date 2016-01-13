class WelcomeController < ApplicationController
  include WelcomeHelper

  def login
  end

  def validate
    user = User.find_by({username: params["username"], password: params["password"]})
    if user.nil?
      flash[:notice] = "Username or Password error, please input correct one"
      render "login"
    else
      set_cookies
      redirect_to course_homepage_path
    end
  end

  def signup
  end

  def create_user
    user = User.create({username: params["username"], password: params["password"]})
    if user.nil?
      flash[:notice] = "Sign Up failed, please try again"
      render "signup"
    else
      set_cookies
      redirect_to course_homepage_path
    end
  end
end