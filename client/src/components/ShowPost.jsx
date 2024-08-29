import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ShowPost = ({ post, onDelete }) => {
  return (
    <div className="card w-96 shadow-xl bg-slate-100 text-neutral-700">
      <div className="card-body p-5">
        <div className="card-actions justify-end relative">
          <button
            className="btn btn-circle btn-outline btn-sm"
            // eslint-disable-next-line react/prop-types
            onClick={() => onDelete(post._id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* eslint-disable-next-line react/prop-types */}
        <h1 className="text-2xl text-blue-400">{post.title}</h1>
        {/* eslint-disable-next-line react/prop-types */}
        <p>{post.description}</p>

        {/* eslint-disable-next-line react/prop-types */}
        <Link to={`/edit/${post._id}`} className="card-actions justify-end">
          <button className="btn bg-blue-500 btn-sm border-none text-neutral-900 hover:text-white hover:bg-blue-400">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowPost;
