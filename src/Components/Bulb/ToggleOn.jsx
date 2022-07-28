import React from "react";

function ToggleOn(props) {
  return (
    <div>
      <img src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg" />
      <button onClick={props.onClick}>ON</button>
    </div>
  );
}

export default ToggleOn;
