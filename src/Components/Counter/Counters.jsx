import React from "react";
import counterData from "./counterData";
import Counter from "./Counter";

function Counters() {
  return (
    <div>
      {counterData.map((c) => (
        <Counter
          key={c.id}
          value={c.value}
          backgroundColor={c.backgroundColor}
        />
      ))}
    </div>
  );
}

export default Counters;
