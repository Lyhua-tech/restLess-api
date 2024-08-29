import axios from "axios";

const API_URL = "<http://localhost:9001/v1/api/post>"; // Removed angle brackets

// Fetch all posts
export const getAllPost = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    // Accessing the posts from the response structure
    return response.data.data.posts; // Adjusted to return the posts array
  } catch (error) {
    console.error("Error fetching post: ", error);
    throw error;
  }
};

export const createPost = async (post) => {
  try {
    const response = await axios.post(API_URL, post);
    return response.data;
  } catch (error) {
    console.error("Error adding post", error);
    throw error;
  }
};

export const deletePost = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting post", error);
    throw error;
  }
};

export const updatePost = async (id, updatedPost) => {
  try {
    await axios.patch(`${API_URL}/${id}`, updatedPost);
  } catch (error) {
    console.error("Error updating post", error);
    throw error;
  }
};
