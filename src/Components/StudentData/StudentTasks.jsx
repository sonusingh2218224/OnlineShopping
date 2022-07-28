import React, { useState } from "react";
import StuTask from "./StuTask";

function StudentTasks() {
  const [studata, setStuData] = useState([
    { id: 1, name: "sonu singh", roll: "221983", branch: "cse" },
    { id: 2, name: "Raunk singh", roll: "221983", branch: "cse" },
    { id: 3, name: "Asha singh", roll: "221983", branch: "cse" },
  ]);

  const onDeleteHandler = (id) => {
    const result = studata.filter((t) => t.id !== id);
    setStuData(result);
  };

  return (
    <div>
      {studata.map((data) => (
        <StuTask
          key={data.id}
          id={data.id}
          name={data.name}
          roll={data.roll}
          branch={data.branch}
          onDelete={onDeleteHandler}
        />
      ))}
    </div>
  );
}

export default StudentTasks;
