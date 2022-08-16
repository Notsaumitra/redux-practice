import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "../features/posts/postsSlice";
import { useState } from "react";

const AddPostForm = () => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [postValue, setValue] = useState({
    id: 0,
    title: "",
    userId: users[0].id,
  });

  return (
    <div>
      <form>
        <input
          type="number"
          value={postValue.id}
          onChange={(e) => setValue({ ...postValue, id: +e.target.value })}
        />
        <br />
        <select
          onChange={(e) => setValue({ ...postValue, userId: +e.target.value })}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <option></option>
        <input
          type="text"
          value={postValue.title}
          onChange={(e) => setValue({ ...postValue, title: e.target.value })}
        />
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(postAdded(postValue));
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;
