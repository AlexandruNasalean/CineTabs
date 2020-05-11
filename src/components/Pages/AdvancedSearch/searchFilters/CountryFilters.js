import React, { Component } from "react";
// import Cookies from "js-cookie";
// import {Form} from "react-bootstrap";
import {Dropdown} from "react-bootstrap"
import { uniqBy } from "lodash";
import "./CountryFilters.css"


export class CountryFilters extends Component {

  render() {
    const {searchResults, checkCountryHandler, Country}= this.props;
    const CountryFiltered = uniqBy(searchResults, 'Country')
    console.log(CountryFiltered)
    return ( 

  <div className="Country-filter">
  <label> Country </label>
<div className="country-filter">
  <select className="country-dropdown" onChange={checkCountryHandler}>
    { CountryFiltered?.map((movie, index) =>(
        <option key={index} value={movie.Country}>{movie.Country}</option>
    ))}
  </select>
</div>
</div>
  // </div>
     );
  }
}
 