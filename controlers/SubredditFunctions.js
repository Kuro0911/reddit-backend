const Subreddit = require("../models/Subreddit");
const { Types } = require("mongoose");
const getSubredditByID = async (req, res) => {
  console.log(req.params);
  try {
    const subreddit = await Subreddit.findOne({ sub_id: req.params.sub_id });
    if (!subreddit) {
      return res.status(404).json({ msg: "not found" });
    }
    res.status(200).json({ subreddit });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const createSubreddit = async (req, res) => {
  try {
    const subreddit = await Subreddit.create(req.body);
    res.status(201).json({ subreddit });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const addPostToSubreddit = async (req, res) => {
  try {
    const subreddit = await Subreddit.findOneAndUpdate(
      { sub_id: req.params.sub_id },
      { $push: { posts: req.body } },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({ subreddit });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getPostByID = async (req, res) => {
  console.log(req.params);
  try {
    const subreddit = await Subreddit.findOne({
      sub_id: req.params.sub_id,
    });
    subreddit.posts.map((ele, key) => {
      if (ele._id.toString() === req.params.post_id) {
        return res.status(200).json(ele);
      }
    });
    res.status(404).json({ msg: "not found" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

module.exports = {
  getSubredditByID,
  createSubreddit,
  addPostToSubreddit,
  getPostByID,
};
