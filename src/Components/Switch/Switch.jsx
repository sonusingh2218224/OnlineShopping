import React, { useState } from "react";
import "./Switch.css";

const Switch = () => {
  const [isActive, setIsActive] = useState(false);

  const updateSwitch = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      onClick={updateSwitch}
      className={`m-switch ${isActive ? "active" : ""}`}
    >
      <div className="circle"></div>
    </div>
  );
};

export default Switch;
