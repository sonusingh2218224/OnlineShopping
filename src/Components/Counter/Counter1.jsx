import React, { useState } from "react";

function Counter1() {
  const [state, setState] = useState(100);

  const decrement = () => {
    setState(state - 1);
  };

  const increment = () => {
    setState(state + 1);
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      {state}
      <button onClick={increment}>+</button>
    </div>
  );
}
export default Counter1;
