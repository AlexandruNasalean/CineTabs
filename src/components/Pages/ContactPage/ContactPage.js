import React, { useState } from "react";
import { Card, ListGroup, ListGroupItem, Form, Button } from "react-bootstrap";
import "./ContactPage.css";

export function ContactPage() {
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <img src="https://i.imgur.com/r3dLpmN.png" id="contact-logo" />
        <h4>Contact Us</h4>
        <ul>
          <li>e-mail: info@cinetab.com</li>
          <li>telephone: 0040 318 555 4598</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2 id="greeting">We'd love to hear from you!</h2>
        <br />
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Full Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter your name" />
            <Form.Control.Feedback type="invalid">
              Please enter your name
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control required type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your data with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please enter your e-mail: email@example.com
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Your Phone Number</Form.Label>
            <Form.Control
              required
              type="tel"
              placeholder="Phone"
              pattern="[0-9]{10}"
            />
            <Form.Control.Feedback type="invalid">
              Please enter your phone number: 07xxxxxxxx
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your message</Form.Label>
            <Form.Control required as="textarea" rows="3" />
            <Form.Control.Feedback type="invalid">
              Ooops! Where is your message?
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              required
              type="checkbox"
              label="I agree to send Cinetab my data."
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button variant="primary" type="submit" id="contact-submit" block>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
