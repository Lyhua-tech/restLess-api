import React, { useState, useEffect } from "react";
import {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} from "../api/features/userApi";
import CreatePost from "../components/CreatePost";
import ListPost from "../components/ListPost";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(4); // Limit the number of posts per page
  const [sortBy, setSortBy] = useState(null); // State for sorting posts

  // Fetch posts with current page, limit, and sortBy
  const { data, error, isLoading } = useGetPostsQuery({ page, limit, sortBy });

  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();

  // Update URL when the page changes
  useEffect(() => {
    window.history.replaceState(null, "", `?page=${page}&sort=${sortBy || ""}`);
  }, [page, sortBy]);

  const handleCreatePost = async (title, description) => {
    const newPost = { title, description };
    try {
      await createPost(newPost); // No need to refetch manually
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      await deletePost(id); // No need to refetch manually
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleNextPage = () => {
    if (data?.data.posts.length === limit) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleSortByLikes = () => {
    setSortBy((prevSort) => (prevSort === "likeCount" ? null : "likeCount"));
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div>
      <CreatePost onCreate={handleCreatePost} />
      <ListPost posts={data?.data?.posts || []} onDelete={handleDeletePost} />
      <div>
        <button onClick={handlePreviousPage} disabled={page === 1}>
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={data?.data.posts.length < limit}
        >
          Next
        </button>
      </div>
      <div>
        <button onClick={handleSortByLikes}>
          Sort by Likes {sortBy === "likeCount" ? "(Active)" : ""}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
