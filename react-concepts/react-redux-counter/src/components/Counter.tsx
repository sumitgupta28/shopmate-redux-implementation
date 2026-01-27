import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../state/store";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="App">
      <h2>{count}</h2>
      <div>
        <button type="button" onClick={() => dispatch(incrementAsync(10))}>
          incrementAsync 10
        </button>

        <button type="button" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatch(incrementByAmount(10))}>
          Increment by 10
        </button>
      </div>
    </div>
  );
};

export default Counter;
