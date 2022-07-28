import React, { useState } from "react";

const ShortCirEva = () => {
  const [demo, setDemo] = useState("");

  return (
    <div>
      <h1>sonu singh {demo || "sonu"}</h1>

      <h1>asha singh</h1>
    </div>
  );
};

export default ShortCirEva;
