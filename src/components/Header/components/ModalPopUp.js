import React, { Component } from "react";
import {Modal, Button, Row, Col, Form} from "react-bootstrap";
export class AddDepModal extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
          <>
            <Button variant="primary" onClick={handleShow}>
Log In PopUp
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Log In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="Container">
                To add Form fields for log in.
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onhide}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  );
}};
*//*

