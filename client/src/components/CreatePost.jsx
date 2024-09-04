import { useState } from "react";
import { TextField, Box, Button } from "@mui/material";

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
      <Box
        onSubmit={handleSubmit}
        component="form"
        autoComplete="on"
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          mx: "auto",
          gap: 2,
        }}
      >
        <TextField
          color="success"
          label="Post"
          variant="outlined"
          type="text"
          value={title}
          onChange={handleChangeTitle}
          placeholder="Title..."
        />
        <TextField
          color="success"
          label="Description"
          variant="outlined"
          type="text"
          value={description}
          onChange={handleChangeDescription}
          placeholder="Description..."
        />
        <Button
          variant="outlined"
          type="submit"
          sx={{ py: 2,borderColor: "#B53389",
            color: "#B53389",
            "&:hover": {
              backgroundColor: "#B55795",
              color: "white"
            },
            fontSize: 16}}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default CreatePost;
