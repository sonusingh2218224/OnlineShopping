import React, { useState } from "react";

const HookObj = () => {
  const [myObj, setMyObj] = useState({
    myName: "sonu sinng",
    age: 21,
    Degree: "B.tech",
  });

  const changeObject = () => {
    setMyObj({ ...myObj, myName: "nitesh" });
  };
  return (
    <div>
      <h1>
        Name:{myObj.myName} & age:{myObj.age} Degree:{myObj.Degree}
      </h1>
      <button onClick={changeObject}>Update</button>
    </div>
  );
};

export default HookObj;
