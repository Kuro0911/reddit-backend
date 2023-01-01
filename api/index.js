const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const subreddit = require("../routes/Subreddit");
const connectDB = require("../db/connect");
var cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is up on ${port}...`));
  } catch (err) {
    console.log(err);
  }
};
start();
app.get("/api/v1", (req, res) => res.send("Hello World!"));

app.use("/api/v1/subreddit", subreddit);

module.exports = app;

// app.get('/api/v1/subreddit/home')  -> get home page ->done
// app.post('/api/v1/subreddit')  -> create new subreddit -> done
// app.get('/api/v1/subreddit/:sub_id')  -> get subreddit by sub_id -> done
// app.post('/api/v1/subreddit/:sub_id')  -> create a new post on subreddit by sub_id -> done
// app.get(/api/v1/subreddit/:sub_id/:post_id); -> get one post by id -> done

// app.get('/api/v1/subreddit')  -> get all the subreddit
// app.patch('/api/v1/subreddit/:id')  -> update id subreddit
// app.delete('/api/v1/subreddit')  -> del posts
