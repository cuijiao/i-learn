class CourseController < ApplicationController
  def index
    @learn_courses = Course.where("tag = 'learn'")
    @entertainment_courses = Course.where("tag = 'entertainment'")
  end
end
