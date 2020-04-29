import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./AdvSearch.css"


export class AdvancedSearchResults extends Component {
  
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className="container">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
        </Card.Body>
      </Card>
      </div>
     );
  }
}
 
