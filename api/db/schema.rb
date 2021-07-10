# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_10_082648) do

  create_table "book_user_favorites", charset: "utf8mb4", force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "description_summary"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "book_isbn"
    t.string "url"
    t.string "medium_url"
    t.string "title"
  end

  create_table "book_user_reads", charset: "utf8mb4", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "book_isbn"
    t.integer "page"
    t.string "title"
  end

  create_table "book_want_to_reads", charset: "utf8mb4", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "book_isbn"
    t.string "url"
    t.string "medium_url"
    t.string "title"
  end

  create_table "comments", charset: "utf8mb4", force: :cascade do |t|
    t.integer "post_id", null: false
    t.integer "user_id", null: false
    t.text "comment", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "user_name"
  end

  create_table "likes", charset: "utf8mb4", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "post_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "notifications", charset: "utf8mb4", force: :cascade do |t|
    t.integer "visitor_id", null: false
    t.integer "visited_id", null: false
    t.integer "post_id"
    t.integer "comment_id"
    t.string "action", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "checked", default: false, null: false
    t.index ["comment_id"], name: "index_notifications_on_comment_id"
    t.index ["post_id"], name: "index_notifications_on_post_id"
    t.index ["visited_id"], name: "index_notifications_on_visited_id"
    t.index ["visitor_id"], name: "index_notifications_on_visitor_id"
  end

  create_table "posts", charset: "utf8mb4", force: :cascade do |t|
    t.integer "user_id", null: false
    t.text "impression"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "book_isbn"
    t.string "user_name"
    t.string "url"
    t.string "medium_url"
    t.string "title"
  end

  create_table "ranks", charset: "utf8mb4", force: :cascade do |t|
    t.integer "rank_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "book_isbn"
    t.string "url"
    t.string "medium_url"
    t.string "title"
  end

  create_table "relationships", charset: "utf8mb4", force: :cascade do |t|
    t.integer "followed_id"
    t.integer "follower_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["followed_id"], name: "index_relationships_on_followed_id"
    t.index ["follower_id", "followed_id"], name: "index_relationships_on_follower_id_and_followed_id", unique: true
    t.index ["follower_id"], name: "index_relationships_on_follower_id"
  end

  create_table "users", charset: "utf8mb4", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
  end

end
