import React, { useEffect, useState } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);

  const countHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (count >= 1) {
      document.title = `Counts (${count})`;
    } else {
      document.title = `Counts`;
    }
    // console.log("hello useffect");
  }, [count]);
  console.log("hello outside");
  return (
    <div>
      UseEffect1
      <h1>{count}</h1>
      <button onClick={countHandler}>Click me 😃 </button>
    </div>
  );
}

export default UseEffect1;
