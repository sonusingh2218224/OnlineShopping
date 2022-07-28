import { Badge, Button } from "react-bootstrap";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import links from "./NavLinks";
import "../Component4/Navbar.css"
import {CartContext} from "../App"
function Navbar() {
  const navigator= useNavigate();
   const { cart, setCart } = React.useContext(CartContext);
  return (
    
    // <div className="m-navbar-wrapper d-flex justify-content-center gap-5 mt-3 text-white  bg-dark py-4 text-decoration-none ">
    //   <Link to="/student" style={{ textDecoration: "none" }}>
    //     Student
    //   </Link>
    //   <Link to="/home" style={{ textDecoration: "none" }}>
    //     Home
    //   </Link>
    //   <Link to="/avtar" style={{ textDecoration: "none" }}>
    //     Avtar
    //   </Link>
    //   <Link to="/rating" style={{ textDecoration: "none" }}>
    //     Rating
    //   </Link>
    //   <Link to="/api" style={{ textDecoration: "none" }}>
    //     API
    //   </Link>

    //   <Link to="/loginform/about" style={{ textDecoration: "none" }}>
    //     Add Course
    //   </Link>
    // </div>
    <div className="m-navbar-wrapper d-flex justify-content-center gap-5 mt-3 text-white  bg-dark py-4 text-decoration-none">
      <Button onClick={()=>navigator(-1)}>Back</Button>
        {
          links?.map(link=>(
            <NavLink className=   {({isActive})=>(isActive? "active":"")} to={link.path} >
               {link.label}
            </NavLink>

          ))
        }
        <Button>
        Cart <Badge>{cart && cart.items.length}</Badge>
      </Button>

        <Button  onClick={()=>navigator(1)}>Forward</Button>
    </div>
  );
}

export default Navbar;
