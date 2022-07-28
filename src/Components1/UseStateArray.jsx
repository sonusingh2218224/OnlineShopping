import React, { useState } from "react";
import { Children } from "react/cjs/react.production.min";

function UseStateArray() {
  const bioData = [
    { id: 1, myName: "sonu singh", age: 22 },
    { id: 2, myName: "asha singh", age: 25 },
    { id: 3, myName: "Rinki singh", age: 20 },
  ];
  const [myArray, setmyArray] = useState(bioData);

  const clearArray = () => {
    let val = myArray;
    if (val === myArray) {
      setmyArray([]);
    }
  };

  const removeArray = (id) => {
    const myNewArray = myArray.filter((value) => {
      return value.id !== id;
    });
    setmyArray(myNewArray);

    //
  };

  return (
    <div
      style={{
        border: "2px solid red",
        borderRadius: "10px",
        color: "blue",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "pink",
        margin: "100px",
        width: "80%",
        padding: "10px",
      }}
    >
      {myArray.map((value) => {
        return (
          <h1
            style={{
              fontSize: "40px",
              backgroundColor: "grey",
              padding: "10px",
              margin: "10px",
              borderRadius: "12px",
            }}
            key={value.id}
          >
            Name:{value.myName} & age : {value.age}
            <button
              className="btn btn-danger p-3 m-4"
              onClick={() => removeArray(value.id)}
            >
              remove
            </button>
          </h1>
        );
      })}
      <button className="btn btn-primary btn-lg" onClick={clearArray}>
        Clear
      </button>
    </div>
  );
}

export default UseStateArray;
