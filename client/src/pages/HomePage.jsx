import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import axios from "axios";
import ListPost from "../components/ListPost";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  // Fetch posts when the component mounts
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:9001/v1/api/post");
      setPosts(response.data.data.posts); // Adjust according to your API structure
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Handle creating a new post
  const handleCreatePost = async (title, description) => {
    const newPost = { title, description };
    try {
      await axios.post(
        "http://localhost:9001/v1/api/post",
        newPost
      );
      // Fetch the latest posts after a new post is created
      fetchPosts(); 
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Handle deleting a post
  const deletePost = async (id) => {
    try {
      await axios.delete(`http://localhost:9001/v1/api/post/${id}`);
      setPosts((prevPosts) => prevPosts.filter(post => post.id !== id && post._id !== id));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div>
      <CreatePost onCreate={handleCreatePost} />
      <ListPost posts={posts} onDelete={deletePost} />
    </div>
  );
};

export default HomePage;
