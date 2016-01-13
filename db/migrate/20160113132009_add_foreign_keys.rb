class AddForeignKeys < ActiveRecord::Migration
  def change
    add_foreign_key :registed_courses, :users, :column => "user_id"
    add_foreign_key :registed_courses, :courses, :column => "course_id"
  end
end
