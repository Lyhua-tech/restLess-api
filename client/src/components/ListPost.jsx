import ShowPost from "./ShowPost";

// eslint-disable-next-line react/prop-types
const ListPost = ({ posts, onDelete }) => {
  // eslint-disable-next-line react/prop-types
  const renderPost = posts.map((post) => {
    // eslint-disable-next-line react/jsx-key
    return <ShowPost key={post._id} post={post} onDelete={onDelete} />;
  });
  return <div className="flex flex-col items-center justify-center gap-3">{renderPost}</div>;
};

export default ListPost;
