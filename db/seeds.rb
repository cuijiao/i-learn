# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Course.create({name:"CSS语言", tag:"learn",owner: "tong", published_at: Time.new(2016,1,1), status: "open"})
Course.create({name:"Ruby", tag:"learn",owner: "tong", published_at: Time.new(2016,1,1), status: "open"})
Course.create({name:"Mobile开发", tag:"learn",owner: "tong", published_at: Time.new(2016,1,1), status: "open"})
Course.create({name:"Web开发", tag:"learn",owner: "tong", published_at: Time.new(2016,1,1), status: "open"})
Course.create({name:"CSS语言", tag:"entertainment",owner: "jiao", published_at: Time.new(2016,1,1), status: "open"})
Course.create({name:"Ruby", tag:"entertainment",owner: "jiao", published_at: Time.new(2016,1,1), status: "open"})