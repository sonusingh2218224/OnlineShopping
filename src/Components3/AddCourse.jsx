import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

function AddCourse() {
  return (
    <Fragment>
      <h1 className="text-center my-3">Fill Course Details</h1>
      <Form className="col-4 text-center justify-content-center align-items-center mx-auto border bg-danger text-white  font-weight-bolder  ">
        <FormGroup>
          <label for="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter Here"
            name="userId"
            id="userId"
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input type="text" placeholder="Enter Here" id="title" />
        </FormGroup>

        <FormGroup>
          <Label for="des">Course Description</Label>
          <Input type="textarea" id="des" />
        </FormGroup>
        <Container>
          <Button color="success">Add Course</Button>
          <Button color="warning"> Clear</Button>
        </Container>
      </Form>
    </Fragment>
  );
}

export default AddCourse;
