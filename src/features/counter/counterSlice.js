import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.count += 1;
    },
    decrement: (state, action) => {
      state.count -= 1;
    },
    reset: (state, action) => {
      state.count = 0;
    },
    incrementBy: (state, action) => {
      console.log(action);
      const value = +action.payload > 0 ? +action.payload : 0;
      state.count += value;
    },
  },
});

export const { increment, decrement, reset, incrementBy } =
  counterSlice.actions;
export default counterSlice.reducer;
