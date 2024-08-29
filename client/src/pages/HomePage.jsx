import { useEffect, useState } from "react";
import CreatePost from "../components/CreatePost";
import axios from "axios";
import ListPost from "../components/ListPost";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = async (title, description) => {
    const newPost = { title, description };
    try {
      const response = await axios.post(
        "http://localhost:9001/v1/api/post",
        newPost
      );
      setPosts([...posts, response]);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  // Fetch posts when the component mounts
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:9001/v1/api/post");
      console.log(response.data.data.posts);
      setPosts(response.data.data.posts); // Adjust according to your API structure
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:9001/v1/api/post/${id}`);
      setPosts(response.data.data.posts);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  // const updateUser = async (id, newPost) => {
  //   try {
  //     const response = await axios.patch(`http://localhost:9001/v1/api/post/${id}`, newPost);
  //     setPosts()
  //   } catch (error) {
  //     console.error("Error fetching posts:", error);
  //   }
  // }
  return (
    <div>
      <CreatePost onCreate={handleCreatePost} />
      <ListPost posts={posts} onDelete={deletePost} />
    </div>
  );
};

export default HomePage;
