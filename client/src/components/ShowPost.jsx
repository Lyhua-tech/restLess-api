import { Link } from "react-router-dom";
const ShowPost = ({ post, onDelete }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <button onClick={() => onDelete(post._id)}>
        Delete
      </button>
      <Link to={`/edit/${post._id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default ShowPost;
