import React, { Component } from "react";
import Cookies from "js-cookie";
import {Form} from "react-bootstrap";
import {Dropdown} from "react-bootstrap"

export class CountryFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Country Filters
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
      </div>
     );
  }
}
 