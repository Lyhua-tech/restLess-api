import ShowPost from "./ShowPost";

// eslint-disable-next-line react/prop-types
const ListPost = ({ posts, onDelete }) => {
  if (!posts || !Array.isArray(posts)) {
    return <div>No posts available</div>;
  }

  const renderPost = posts.map((post, index) => {
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
      />
    );
  });

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {renderPost}
    </div>
  );
};

export default ListPost;
