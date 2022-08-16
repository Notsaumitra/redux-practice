import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addPost, getPosts } from "../features/posts/postsSlice";

const Posts = () => {
  const { posts, status } = useSelector((state) => state.posts);
  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const addSinglePost = () => {
    dispatch(
      addPost({
        userId: 1,
        id: 101,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
      })
    );
  };

  if (status === "loading") return <h1>Loading...</h1>;

  return (
    <>
      <div>Posts</div>
      <ul>
        {posts.map((ele) => (
          <li key={ele.id}>
            {ele.id}, {ele.title}
          </li>
        ))}
      </ul>

      <button onClick={() => addSinglePost()}>Add Post</button>

      {/* <div>Posts by users</div> */}
      {/* <>
        {users.map((user) => (
          <div style={{ border: "solid 2px" }}>
            <div>Posts by {user.name}</div>
            <ul>
              {posts
                .filter((k) => k.userId === user.id)
                .map((post) => (
                  <li key={post.id}>{post.title}</li>
                ))}
            </ul>
          </div>
        ))}
      </> */}
    </>
  );
};

export default Posts;
