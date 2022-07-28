import React from "react";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "../Components3/Home";
import AddCourse from "./AddCourse";
import AllCourses from "./AllCourses";
import Course from "./Course";

function Header() {
  const clickHandler = () => {
    toast("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    ("thanku");
  };
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Button onClick={clickHandler}>Submit</Button>
      <Home />
      {/* <Course title={"javascript"} des={"it is javascript tuorial"} /> */}
      <AllCourses />
      <AddCourse />
    </div>
  );
}

export default Header;
