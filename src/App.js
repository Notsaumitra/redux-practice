import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import { calculateTotal, getCartItems } from "./features/cart/cartSlice";
import Modal from "./components/Modal";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import AddPostForm from "./components/AddPostForm";
import Todos from "./components/Todo";
import Parent from "./components/ChallengeOne/Parent";
import { Routes, Route } from "react-router-dom";

function App() {
  // const { cartItems, isLoading } = useSelector((store) => store.cart);
  // const { isOpen } = useSelector((store) => store.popUp);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(calculateTotal());
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [cartItems]);
  // useEffect(() => {
  //   // dispatch(getCartItems());

  //   dispatch(getCartItems("Saumitra")); // pass anything and it will be available as a first param in callback func() of createAsyncThunk

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  return (
    // <main className="App">
    //   {isOpen && <Modal />}
    //   <Navbar />
    //   <CartContainer />
    // </main>
    <>
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      {/* <Parent />
      <Counter />
      <Posts />
      <AddPostForm /> */}
      <Todos />
    </>
  );
}

export default App;
