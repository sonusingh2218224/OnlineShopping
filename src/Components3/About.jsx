import React from "react";
import { Container } from "react-bootstrap";

function About() {
  return (
    <div>
      <Container className="border w-50 h-50  border border-primary ">
        <div className="text-color border py-5 m-3 bg-white ">
          <h1 className="d-flex justify-content-center my-4">About Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            corrupti ipsa aut illo velit, tempore esse molestiae earum fugiat
            minima iste nulla. Ab, illo debitis? Nisi ab tempora necessitatibus
            sapiente.
          </p>
        </div>
      </Container>
    </div>
  );
}

export default About;
