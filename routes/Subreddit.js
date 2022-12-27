const express = require("express");
const router = express.Router();

const {
  getSubredditByID,
  createSubreddit,
  addPostToSubreddit,
  getPostByID,
  getHome,
} = require("../controlers/SubredditFunctions");

router.route("/home").get(getHome);
router.route("/").post(createSubreddit);
router.route("/:sub_id").get(getSubredditByID).post(addPostToSubreddit);
router.route("/:sub_id/:post_id").get(getPostByID);

module.exports = router;
