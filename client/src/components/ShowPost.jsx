import { Link } from "react-router-dom";
import { Grid, Button, Typography, Box, Card, CardContent, CardActions, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUpdatePostMutation } from "../api/features/userApi";

const ShowPost = ({ post, onDelete }) => {
  const [updatePost] = useUpdatePostMutation();

  const handleIncrementLike = async (id, currentLikeCount) => {
    try {
      await updatePost({
        id,
        likeCount: currentLikeCount + 1,
      }).unwrap();
    } catch (error) {
      console.error("Error incrementing like count:", error);
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 450, m: 2, position: "relative", boxShadow: 3 }}>
        <Box sx={{ position: "absolute", top: 8, right: 8 }}>
          <IconButton
            onClick={() => onDelete(post._id || post.id)}
            sx={{ bgcolor: "rgba(255,255,255,0.8)", "&:hover": { bgcolor: "rgba(255,255,255,1)" } }}
          >
            <CancelIcon sx={{color: '#B53389'}} />
          </IconButton>
        </Box>
        <CardContent>
          <Typography variant="h6" color="textPrimary" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            {post.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton onClick={() => handleIncrementLike(post._id || post.id, post.likeCount)}>
            <FavoriteIcon sx={{color: '#B53389'}} />
          </IconButton>
          <Typography variant="body2" color="textSecondary">
            {post.likeCount}
          </Typography>
          <Box flexGrow={1} />
          <Button
            variant="contained"
            size="small"
            component={Link}
            to={`/edit/${post._id}`}
            sx={{
              backgroundColor: "#B53389",
              color: "white",
              "&:hover": {
                backgroundColor: "#B55795",
              },
              fontSize: 16
            }}
          >
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ShowPost;
