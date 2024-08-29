import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const [title, setTitle] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const [description, setDescription] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const newPost = {
        title: title,
        description: description,
      };
      const response = await axios.patch(
        `http://localhost:9001/v1/api/post/${id}`,
        newPost
      );
      console.log(response);
      navigate("/");
      // setPost(response); // Adjust according to your API structure
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleUpdate} className="flex flex-col w-full items-center gap-3 mb-3 justify-center">
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
