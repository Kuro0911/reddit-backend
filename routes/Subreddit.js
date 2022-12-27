const express = require("express");
const router = express.Router();

const {
  getSubredditByID,
  createSubreddit,
  addPostToSubreddit,
  getPostByID,
} = require("../controlers/SubredditFunctions");

router.route("/").post(createSubreddit);
router.route("/:sub_id").get(getSubredditByID).post(addPostToSubreddit);
router.route("/:sub_id/:post_id").get(getPostByID);

module.exports = router;
