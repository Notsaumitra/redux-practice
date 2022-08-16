import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    {
      id: 1,
      name: "user 1",
    },
    {
      id: 2,
      name: "user 2",
    },
    {
      id: 3,
      name: "user 3",
    },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
