const postController = require("../controllers/postController");
const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(postController.getAllPost)
  .post(postController.createPost);

router
  .route("/:id")
  .delete(postController.deleteUser)
  .patch(postController.updateUser)
  .get(postController.getOneUser);

module.exports = router;
