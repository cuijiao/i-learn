class UsersController < ApplicationController
  def index
  end

  def login
    user = User.find_by({:user_name => params["user_name"], :password => params["password"]})
    if user.nil?
      redirect_to root_path
    end
  end
end
