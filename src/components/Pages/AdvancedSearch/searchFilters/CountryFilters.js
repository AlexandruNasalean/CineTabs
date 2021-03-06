import React, { Component } from "react";
// import Cookies from "js-cookie";
// import {Form} from "react-bootstrap";
import {Dropdown} from "react-bootstrap"
import Button from "react-bootstrap/Button";
import { uniqBy } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import "./CountryFilters.css"
import "../AdvSearch.css"


export class CountryFilters extends Component {

  render() {
    const {searchResults, checkCountryHandler, Country, CountrySelected,handleDeleteFilterQuerryCountry}= this.props;
    const CountryFiltered = uniqBy(searchResults, 'Country')
    // console.log(CountryFiltered)
    const CountryDeleteQuerry= Country.join(", ");

    return ( 

  <div className="Country-filter">
  <label> Country </label>
  <div className="country-filter">
  <select className="country-dropdown" onClick={checkCountryHandler}>
    { CountryFiltered?.map((movie, index) =>(
        <option key={index} value={movie.Country}>{movie.Country}</option>
    ))}
  </select>
  {CountrySelected ?(
         <Button onClick={handleDeleteFilterQuerryCountry} 
         className="QuerryButton"
         style={ CountryDeleteQuerry ? ({ display:'inline-block'}) : {display : 'none'} }>
           {CountryDeleteQuerry}<FontAwesomeIcon icon={faTimes} className="QuerryListIcon">
             </FontAwesomeIcon></Button>
          
       ) : (
         ""
       )
      }
</div>
  </div>
     );
  }
}
 