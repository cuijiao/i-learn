module WelcomeHelper
  def set_cookies
    cookies[:username] = params["username"]
    cookies[:password] = params["password"]
  end
end
