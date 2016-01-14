class CourseController < ApplicationController
  before_action :find_user

  def index
    @learn_courses = Course.where("tag = 'learn'")[0..3]
    @entertainment_courses = Course.where("tag = 'entertainment'")[0..3]
    courses_ids = RegistedCourse.where("user_id = ?", @current_user.id).pluck(:id)
    @registed_courses = courses_ids.empty? ? [] : Course.where("id in (#{courses_ids.join(',')})")[0..3]
  end

  def show
    @learn_courses = Course.where("tag = 'learn'")
    @entertainment_courses = Course.where("tag = 'entertainment'")
  end

  def details
    course_id = params[:id]
    @course = Course.find(course_id)
  end

  private
  def find_user
    username = cookies[:username]
    password = cookies[:password]
    @current_user = User.find_by({username: username, password: password})
  end
end
