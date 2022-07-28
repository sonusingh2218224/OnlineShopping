import { Button } from "react-bootstrap";

import React from "react";
import { Container } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Container className="d-flex justify-content-center flex-column align-items-center col-8 ">
        <h1 className="display-6">Welcome to My Channel</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ipsum
          nihil sed eos rem praesentium, illum pariatur consectetur
          reprehenderit quia?
        </p>
        <Button className="">Submit</Button>
      </Container>
    </div>
  );
};

export default Home;
