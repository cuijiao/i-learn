# registed_courses
class RegistedCourse < ActiveRecord::Base
  has_one :user
end