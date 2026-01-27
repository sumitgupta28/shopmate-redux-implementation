import {
  useGetPostsQuery,
  useCreatePostMutation,
} from "../state/post/postAPISlice";

export default function PostList() {
  const {
    data: posts,
    error,
    isLoading,
  } = useGetPostsQuery({
    limit: 10,
    offset: 0,
  });

  const [
    createPostMutation,
    { isLoading: isCreatingPost, isError: isCreatingPostError },
  ] = useCreatePostMutation();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading posts</div>;

  return (
    <div>
      <button
        type="button"
        onClick={() => createPostMutation({ title: "New Post" })}
        disabled={isCreatingPost}
      >
        {isCreatingPost ? "Creating Post..." : "Create Post"}
      </button>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
