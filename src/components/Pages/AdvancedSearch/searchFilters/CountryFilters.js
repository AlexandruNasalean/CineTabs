import React, { Component } from "react";
import Cookies from "js-cookie";
import {Form} from "react-bootstrap";
import {Dropdown} from "react-bootstrap"
import { uniqBy } from "lodash";


export class CountryFilters extends Component {

  render() {
    const {searchResults}= this.props;
    const CountryFiltered = uniqBy(searchResults, 'Country')
    console.log(CountryFiltered)
    return ( 
      <div>
          <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Country Filters
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {CountryFiltered.map((movie, index) =>(
                <Dropdown.Item name={movie.Country} onClick={this.checkCountryHandler} key={index}>{movie.Country}</Dropdown.Item>
            ))}
          </Dropdown.Menu>
          </Dropdown>
    </div>
     );
  }
}
 