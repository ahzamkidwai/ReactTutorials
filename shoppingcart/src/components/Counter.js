import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../redux/slices/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <br />
      <br />
      {count}
      <br />
      <br />
      <button onClick={()=>dispatch(increment())}>Increment</button>
    </div>
  );
}

export default Counter;
