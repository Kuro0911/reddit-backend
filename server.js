const express = require("express");
const app = express();
const port = 3000;
const subreddit = require("./routes/Subreddit");
const connectDB = require("./db/connect");
require("dotenv").config();
app.use(express.json());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is up on ${3000}...`));
  } catch (err) {
    console.log(err);
  }
};
start();
app.get("/api/v1", (req, res) => res.send("Hello World!"));

app.use("/api/v1/subreddit", subreddit);

// app.get('/api/v1/subreddit')  -> get all the subreddit
// app.post('/api/v1/subreddit')  -> create new subreddit -> done
// app.get('/api/v1/subreddit/:id')  -> get id subreddit only -> done
// app.post('/api/v1/subreddit/:id')  -> add post

// app.patch('/api/v1/subreddit/:id')  -> update id subreddit
// app.delete('/api/v1/subreddit')  -> del posts
