import { useState } from "react";

const CreatePost = (props) => {
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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Title: </label>
        <input type="text" value={title} onChange={handleChangeTitle} />
        <label htmlFor="">Description: </label>
        <input
          type="text"
          value={description}
          onChange={handleChangeDescription}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreatePost;
