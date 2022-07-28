import React, { useState, useEffect } from "react";

function Counter({ value }) {
  const [counter, setCounter] = useState(value);
  const [isDark, setColor] = useEffect(false);
  useEffect(() => {
    console.log("counter is updated");
  }, []);

  const decrementCounterHandler = (Counter) => {
    setCounter(Counter - 1);
  };

  const incrementCounterHandler = () => {
    setCounter(Counter + 1);
  };

  return (
    <div>
      <button onClick={decrementCounterHandler}>-fjfj</button>
      {counter}

      <button onClick={incrementCounterHandler}>+</button>
    </div>
  );
}

export default Counter;
