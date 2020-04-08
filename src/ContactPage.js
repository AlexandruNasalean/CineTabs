import React from "react";
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import "./ContactPage.css";

export function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Contact Us</Card.Title>
            <Card.Text></Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem></ListGroupItem>
            <ListGroupItem>e-mail: info@cinetab.com</ListGroupItem>
            <ListGroupItem>telephone: 0040 318 555 4598</ListGroupItem>
          </ListGroup>
        </Card>
      </div>
      <div className="contact-form">
        <h2>We'd love to hear from you!</h2>
        <br />
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="name" placeholder="Enter your name" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your data with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Your Phone Number</Form.Label>
            <Form.Control type="telephone" placeholder="Phone" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="I agree to send Cinetab my data."
            />
          </Form.Group>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
        
      </div>
    </div>
  );
}
