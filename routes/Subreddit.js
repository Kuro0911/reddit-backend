const express = require("express");
const router = express.Router();

const {
  getSubredditByID,
  createSubreddit,
  addPostToSubreddit,
} = require("../controlers/SubredditFunctions");

router.route("/").post(createSubreddit);
router.route("/:sub_id").get(getSubredditByID).post(addPostToSubreddit);

module.exports = router;
