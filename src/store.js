import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/modal/modalSlice";
import counterReducer from "./features/counter/counterSlice";
import postsReducer from "./features/posts/postsSlice";
import usersReducer from "./features/users/usersSlice";
import { todoApi } from "./features/services/api";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    popUp: modalReducer,
    counter: counterReducer,
    posts: postsReducer,
    users: usersReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
