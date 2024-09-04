const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please fill the title"],
  },
  description: {
    type: String,
    required: [true, "Please write the post"],
  },
  likeCount: {
    type: Number,
    default: 0, 
  }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
