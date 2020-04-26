import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


 export class LogOffModal extends Component {
  
  render() { 
    return (
      <div>
      <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered 
      show={this.props.show}
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Log-Out
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Are you sure you want to log out?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button >Yes</Button>
        <Button onClick={this.props.hideModal}>No</Button>
      </Modal.Footer>
    </Modal>
</div>
    );
  }
}
