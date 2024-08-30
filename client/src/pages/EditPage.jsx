import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUpdatePostMutation } from "../api/features/userApi";

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  // Use the RTK Query mutation hook
  const [updatePost] = useUpdatePostMutation();

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedPost = { title, description };
      await updatePost({ id, ...updatedPost });
      
      navigate("/");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate} className="flex flex-col w-full items-center gap-3 mb-3 justify-center">
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder="Title..."
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          placeholder="Description..."
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-success btn-wide" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditPage;
