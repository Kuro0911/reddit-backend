const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "must have a trainer"],
    trim: true,
    maxlength: [40, "title can not be more than 40 characters"],
  },
  upVotes: {
    type: String,
    default: "0",
  },
  downVotes: {
    type: String,
    default: "0",
  },

  sub_id: {
    type: String,
    required: true,
  },
  postedBy: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  data: {
    type: String,
    required: true,
    trim: true,
  },
});

const SubredditSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sub_id: {
    type: String,
    required: true,
    default: this.name,
  },
  img_url: {
    type: String,
    default: "https://avatars.dicebear.com/api/adventurer/123.svg",
  },
  banner_url: {
    type: String,
    default:
      "https://styles.redditmedia.com/t5_zioft/styles/bannerBackgroundImage_j97c6sqyktr21.jpg?width=4000&format=pjpg&s=8a73fafdbf80185d6b4de57897feb1169a7eb210",
  },
  about: {
    type: String,
    required: true,
    maxlength: 100,
  },
  members: {
    type: String,
    default: 1,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  posts: {
    type: [PostSchema],
    required: false,
  },
});

module.exports = mongoose.model("Subreddit", SubredditSchema);
