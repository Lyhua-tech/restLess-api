const ApiFeature = require("../utils/ApiFeature");
const Post = require("../models/postModel");

exports.createPost = async (req, res, next) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      description: req.body.description,
    });
    res.status(201).json({
      status: "success",
      data: {
        Post: newPost,
      },
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getAllPost = async (req, res, next) => {
  try {
    const { cursor, limit = 10 } = req.query;

    // Create ApiFeature instance and chain methods
    const feature = new ApiFeature(Post.find(), req.query)
      .filtering()
      .sorting()
      .limitFields()
      .pagination();

    // Execute query
    const posts = await feature.query;

    // Extract the next and previous cursor from the result
    const prevCursor = cursor && posts.length > 0 ? posts[0]._id : null;
    const nextCursor = posts.length > 0 ? posts[posts.length - 1]._id : null;

    res.status(200).json({
      status: "success",
      data: {
        prevCursor,
        nextCursor,
        result: posts.length,
        posts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      res.status(404).json({
        status: "fail",
        message: "this post is not found!",
      });
    }
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedPost) {
      res.status(404).json({
        status: "fail",
        message: "this post is not found!",
      });
    }
    res.status(202).json({
      status: "success",
      post: updatedPost,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
exports.getOneUser = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({
        status: "fail",
        message: "this post is not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        post,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error.message,
    });
  }
};
