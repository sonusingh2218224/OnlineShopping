import React, { useState } from "react";
import Course from "./Course";

function AllCourses() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "javascript",
      des: "it is javascript course",
    },
    {
      id: 2,
      title: "java",
      des: "it is java course",
    },
    {
      id: 3,
      title: "javascript",
      des: "it is javascript course",
    },
    {
      id: 4,
      title: "Python",
      des: "it is Python course",
    },
    {
      id: 5,
      title: "Node Js",
      des: "it is Node Js course",
    },
  ]);

  return (
    <div className="text-center h1 m-0 ">
      <p>All course</p>
      <p>List of courses</p>

      {courses.map((item) => (
        <Course id={item.id} title={item.title} des={item.des} />
      ))}
    </div>
  );
}

export default AllCourses;
