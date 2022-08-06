import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const url = "https://course-api.com/react-useReducer-cart-project";

// export const getCartItems = createAsyncThunk("cart/getCartItems", () => {
//   return axios
//     .get(url)
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// });
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (anything, thunkAPI) => {
    try {
      console.log(anything);
      console.log(thunkAPI);
      console.log(thunkAPI.getState());
      const res = await axios(url);
      console.log(res);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);
//mutate the state directly
// no need to return anything from reducer because immer library(comes with toolkit) does that work for us
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state, action) => {
      // state.cartItems = [];
      //we can return something but it would replace entire state
      return {
        ...state,
        cartItems: [],
      };
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount++;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === payload.itemId
      );
      cartItem.amount--;
    },
    calculateTotal: (state, action) => {
      let amount = 0;
      let total = 0;
      if (state?.cartItems && state.cartItems.length) {
        state.cartItems.forEach((item) => {
          amount += item.amount;
          total += item.amount * item.price;
        });
      }
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
// console.log(cartSlice);
export default cartSlice.reducer;
