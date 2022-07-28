import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Button,
  Container,
} from "reactstrap";

function Course({ title, des }) {
  return (
    <Card className="text-center  col-4 d-flex mx-auto mt-3 bg-dark text-white">
      <CardBody>
        <CardSubtitle className="display-3">{title}</CardSubtitle>
        <CardText className="display-6">{des}</CardText>
        <Container className="text-center">
          <Button color="danger">Delete</Button>
          <Button color="warning ms-3">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
}

export default Course;
