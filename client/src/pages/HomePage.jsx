import React from "react";
import { useGetPostsQuery, useCreatePostMutation, useDeletePostMutation } from "../api/features/userApi";
import CreatePost from "../components/CreatePost";
import ListPost from "../components/ListPost";

const HomePage = () => {
  // Fetch posts using RTK Query
  const { data: postsData, error, isLoading , refetch} = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();

  // Handle creating a new post
  const handleCreatePost = async (title, description) => {
    const newPost = { title, description };
    try {
      await createPost(newPost);
      refetch();
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Handle deleting a post
  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      refetch();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div>
      <CreatePost onCreate={handleCreatePost} />
      <ListPost posts={postsData?.data?.posts || []} onDelete={handleDeletePost} />
    </div>
  );
};

export default HomePage;
