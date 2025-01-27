import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import "./bootstrap.scss";
import { useNavigate } from "react-router-dom";
import pic from "../assets/images/ActiviteinSec1a.png";

function Bootstrap() {
    const navigate = useNavigate();
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={pic} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => navigate('/main')}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Bootstrap;
