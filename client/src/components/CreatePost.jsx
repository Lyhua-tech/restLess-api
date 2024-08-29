import { useState } from "react";

const CreatePost = (props) => {
  // eslint-disable-next-line react/prop-types
  const onCreate = props.onCreate;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, description);
    setDescription("");
    setTitle("");
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit} className="flex flex-col w-full items-center gap-3 mb-3 justify-center">
        <input
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="Title..."
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          value={description}
          onChange={handleChangeDescription}
          placeholder="Description..."
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn bg-blue-500 hover:bg-blue-400 btn-wide text-white" type="submit">
          Add
        </button>
      </form>
    </>
  );
};

export default CreatePost;
