import React from "react";

function ToggleOff(props) {
  return (
    <div className="rounded">
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg" />
      <button onClick={props.onClick}>OFF</button>
    </div>
  );
}

export default ToggleOff;
