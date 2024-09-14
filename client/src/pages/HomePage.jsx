import React, { useState, useEffect } from 'react';
import { useGetPostsQuery, useCreatePostMutation, useDeletePostMutation } from "../api/features/userApi";
import CreatePost from "../components/CreatePost";
import ListPost from "../components/ListPost";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(3); // Fixed limit for this example

  // Fetch posts with current page and limit
  const { data, error, isLoading, refetch } = useGetPostsQuery({ page, limit });

  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();

  useEffect(() => {
    refetch(); // Refetch data when page or limit changes
    // Update URL without refreshing the page
    window.history.replaceState(null, '', `?page=${page}`);
  }, [page, limit, refetch]);

  const handleCreatePost = async (title, description) => {
    const newPost = { title, description };
    try {
      await createPost(newPost);
      refetch(); // Optionally refetch after creating a post
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
      refetch(); // Optionally refetch after deleting a post
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div>
      <CreatePost onCreate={handleCreatePost} />
      <ListPost
        posts={data?.data?.posts || []}
        onDelete={handleDeletePost}
      />
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={data && data.data.posts.length < limit}>
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
