import React, { useState } from "react";
import ToggleOff from "./ToggleOff";
import ToggleOn from "./ToggleOn";

// const HandlerOnClick = () => {
//   setBulbs;

const onBulbHanldler = (e) => {
  console.log(e.target.value);
};

const offBulbHanlder = (e) => {
  console.log(e.target.value);
};

function Blub() {
  return (
    <div>
      <ToggleOn onClick={onBulbHanldler} />

      <ToggleOff onClick={offBulbHanlder} />
    </div>
  );
}

export default Blub;
