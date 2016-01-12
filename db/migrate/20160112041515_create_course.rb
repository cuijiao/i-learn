class CreateCourse < ActiveRecord::Migration
  def change
    create_table :courses do |t|
      t.string :name
      t.string :owner
      t.string :tag
      t.datetime :published_at
      t.string :status
      t.timestamps
    end
  end
end
