class CourseController < ApplicationController
  before_action :find_user

  def index
    @learn_courses = Course.where("tag = 'learn'")[0..3]
    @entertainment_courses = Course.where("tag = 'entertainment'")[0..3]
    courses_ids = RegistedCourse.where("user_id = ?", @current_user.id).pluck(:id)
    @registed_courses = Course.where("id in (#{courses_ids.join(',')})")[0..3]
  end

  private
  def find_user
    username = cookies[:username]
    password = cookies[:password]
    @current_user = User.find_by({username: username, password: password})
  end
end
