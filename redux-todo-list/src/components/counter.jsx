import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from '../features/counterSlice';

function Counter(props) {
  // Call useSelector to grab the current value of our state variable
  // from the store, and assign it to a variable named "count"
  const count = useSelector((state) => state.count.value);
  // And include the useDispatch hook...
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default Counter;
