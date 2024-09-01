import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Paper";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ShowPost = ({ post, onDelete }) => {
  return (
    <Grid sx={{ width: 450, p: 2, position: "relative", mt: 8 }} item xs={12}>
      <Box sx={{ position: "absolute", right: 10 }}>
        <Box
          variant="outlined"
          onClick={() => onDelete(post._id || post.id)}
          sx={{ borderRadius: 300 }}
        >
          <CancelIcon color="disabled" />
        </Box>
      </Box>

      <Typography variant="h6" color="primary" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {post.description}
      </Typography>

      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button
          variant="contained"
          size="small"
          component={Link}
          to={`/edit/${post._id}`}
          sx={{
            backgroundColor: "warning.main",
            color: "text.warning",
            "&:hover": {
              backgroundColor: "warning.dark",
              color: "white",
            },
          }}
        >
          Edit
        </Button>
      </Box>
    </Grid>
  );
};

export default ShowPost;
