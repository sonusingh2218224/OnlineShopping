import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import AddCourse from "./AddCourse";
import Home from "./Home";

function Main() {
  return (
    <div>
      <Container>
        <div>
          <Row>
            <Col md={4}>
              <Link to="/home">AddCurse</Link>
            </Col>
          </Row>
        </div>
      </Container>

      <Routes>
        <Route path="/" element={<AddCourse />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Main;
