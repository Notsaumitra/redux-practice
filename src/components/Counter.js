import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
  incrementBy,
} from "../features/counter/counterSlice";
import { useNavigate } from "react-router-dom";
import HookUseRefPractice from "./ChallengeOne/HookUseRefPractice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Todos</button>
      <h1>{count}</h1>
      <input
        type="number"
        onChange={(e) => dispatch(incrementBy(e.target.value))}
      />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button
        onClick={() => {
          if (count < 1) {
            return dispatch(reset());
          }
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
