//1: Always write it inside the component or function
//2: Component name must be pascalCase (first letter should be upper case)
// 3: We can directly import or we can directly write it using react hoolname
// 4: Don't call hools inside loops , conditions or nested functions;

import React, { useState } from "react";

const Hooksrules = () => {
  const [myName, setMyName] = useState("sonu");


  return <div>{myName}</div>;
};

export default Hooksrules;
