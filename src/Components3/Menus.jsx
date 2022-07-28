import React from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function Menus() {
  return (
    <ListGroup>

        <ListGroupItem tag="a" href="product">
        <Link to="/product">Post-Product</Link>
      </ListGroupItem>

      <ListGroupItem tag="a" href="home">
        <Link to="/home">Home</Link>
      </ListGroupItem>
      <ListGroupItem tag="a" href="/add-course">
        <Link to="/add-course">Add Course</Link>
      </ListGroupItem>
      <ListGroupItem tag="a" href="/view-courses">
        <Link to="/view-course">View Course</Link>
      </ListGroupItem>
      <ListGroupItem tag="a" href="/about">
        <Link to="/about">About</Link>
      </ListGroupItem>


      <ListGroupItem tag="a" href="/contact">
        <Link to="/contact">Contact</Link>
      </ListGroupItem>

       <ListGroupItem tag="a" href="/user">
        <Link to="/user">User</Link>
      </ListGroupItem>

       <ListGroupItem tag="a" href="/userdata">
        <Link to="/productdata">GetProductData</Link>
      </ListGroupItem>

       <ListGroupItem tag="a" href="/login">
        <Link to="/login">LOGIN</Link>
      </ListGroupItem>

     
    </ListGroup>
  );
}

export default Menus;
