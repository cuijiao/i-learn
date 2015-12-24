# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151224092511) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "consumers", force: :cascade do |t|
    t.string   "email"
    t.string   "consumer_type"
    t.string   "rea_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  create_table "leads", force: :cascade do |t|
    t.integer  "consumer_id"
    t.string   "email"
    t.string   "name"
    t.string   "surname"
    t.string   "phone"
    t.integer  "listing_id"
    t.text     "listing_address"
    t.string   "property_name"
    t.string   "agent_id"
    t.string   "agent_recipient"
    t.string   "subject"
    t.text     "comments"
    t.text     "raw_content"
    t.text     "about_me"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "resend_count"
    t.string   "property_type"
    t.string   "event"
  end

  create_table "users", force: :cascade do |t|
    t.string   "user_name"
    t.string   "email"
    t.string   "password"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
