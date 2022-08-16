import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const POST_URL = "https://jsonplaceholder.typicode.com/posts";
// const initialState = {
//   status: true,
//   posts: [
//     {
//       id: 1,
//       title: "React",
//     },
//     {
//       id: 2,
//       title: "Angular",
//     },
//   ],
// };

export const getPosts = createAsyncThunk("posts/getPosts", async () => {
  try {
    return fetch(POST_URL)
      .then((res) => res.json())
      .then((res) => res);
    // const response = await axios.get(POST_URL);
    // return response.data;
  } catch (err) {
    console.log(err);
  }
});

export const addPost = createAsyncThunk("posts/addPost", async (post) => {
  try {
    const response = await axios.post(POST_URL, post);
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
});

const initialState = {
  posts: [],
  status: "loading",
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      console.log(action.payload);
      // immer.js we can mutate the state inside createslice
      state.posts = [...state.posts, action.payload];
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "loading";
    },
    [getPosts.fulfilled]: (state, action) => {
      console.log(action);
      state.status = "succeeded";
      state.posts = [...state.posts, ...action.payload];
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.posts = [...state.posts, action.payload];
    },
  },
});

export const { postAdded } = postSlice.actions;
export default postSlice.reducer;
