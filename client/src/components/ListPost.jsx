import React from 'react';
import { Grid } from "@mui/material";
import ShowPost from "./ShowPost";

// eslint-disable-next-line react/prop-types
const ListPost = ({ posts, onDelete, onIncrement }) => {
  if (!posts || !Array.isArray(posts)) {
    return <div>No posts available</div>;
  }

  const renderPost = posts.map((post) => {
    if (!post || (!post.id && !post._id)) {
      console.warn("Missing id for post", post);
      return null; // Skip rendering this post if it has no valid id
    }

    const key = post.id || post._id; // Ensure we're using a unique key
    return (
      <ShowPost
        key={key}
        post={post}
        onDelete={onDelete}
        onIncrement={onIncrement}
      />
    );
  });

  return (
    <Grid container spacing={2} gap={3}>
      {renderPost}
    </Grid>
  );
};

export default ListPost;
