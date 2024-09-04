import {
  useGetPostsQuery,
  useCreatePostMutation,
  useDeletePostMutation,
  useUpdatePostMutation
} from "../api/features/userApi";
import CreatePost from "../components/CreatePost";
import ListPost from "../components/ListPost";

const HomePage = () => {
  // Fetch posts using RTK Query
  const { data, error, isLoading } = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();
  const [deletePost] = useDeletePostMutation();
  const [updatePost] = useUpdatePostMutation();

  // Handle creating a new post
  const handleCreatePost = async (title, description) => {
    const newPost = { title, description };
    try {
      await createPost(newPost);
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };

  // Handle deleting a post
  const handleDeletePost = async (id) => {
    try {
      await deletePost(id);
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching posts: {error.message}</div>;

  return (
    <div>
      <CreatePost onCreate={handleCreatePost} />
      <ListPost
        posts={data?.data?.posts || []}
        onDelete={handleDeletePost}
      />
    </div>
  );
};

export default HomePage;
