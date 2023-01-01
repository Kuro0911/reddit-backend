const express = require("express");
const router = express.Router();

const {
  getSubredditByID,
  getAllSubreddit,
  createSubreddit,
  addPostToSubreddit,
  getPostByID,
  getHome,
  addVote,
} = require("../controlers/SubredditFunctions");

router.route("/home").get(getHome);
router.route("/").post(createSubreddit).get(getAllSubreddit);
router.route("/:sub_id").get(getSubredditByID).post(addPostToSubreddit);
router.route("/:sub_id/:post_id").get(getPostByID);
router.route("/:sub_id/:post_id/:vote").patch(addVote);

module.exports = router;
