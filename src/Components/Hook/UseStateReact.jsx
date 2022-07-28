import React, { useState } from "react";

const UseStateReact = () => {
  const [myName, setChange] = useState(
    "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
  );

  console.log(useState);

  const changeName = () => {
    let val = myName;
    if (
      val === "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
    ) {
      setChange(
        "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"
      );
    } else {
      setChange(
        "https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg"
      );
    }
  };

  return (
    <div className=" text-white d-flex mx-auto p-5">
      <img className="" src={myName} />

      <button className=" btn btn-primary  ms-5 " onClick={changeName}>
        click me
      </button>
    </div>
  );
};

export default UseStateReact;
