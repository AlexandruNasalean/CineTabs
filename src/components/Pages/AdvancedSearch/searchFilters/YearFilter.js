import React, { Component } from "react";
import { uniqBy } from "lodash";
import Button from "react-bootstrap/Button";
import "../AdvSearch.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
  convertToNumbersYears,
} from "./filtersUtils";


export class YearFilter extends Component {


  render() { 
    const {YearChangeHandler, searchResults,selected,handleDeleteFilterQuerryYear,Year} =this.props;
    const YearFiltered = uniqBy(searchResults, 'Year')
    const OrderYear = convertToNumbersYears(YearFiltered);
    const YearQuerry= Year.join(",");
    console.log(YearFiltered)
    return (
      <div className="year-filter">
        <label> Year of Release </label>
      <div className="year-filter">
        <select className="year-dropdown" onChange={YearChangeHandler}>
          { OrderYear.map((movie, index) =>(
              <option key={index} value={movie}>{movie}</option>
          ))}
        </select>
       {selected ?(
         <Button onClick={handleDeleteFilterQuerryYear} className="Year-Querry">{YearQuerry}<FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></Button>
          
       ) : (
         ""
       )
      }
      </div>
      </div>
    );
  }
}
 
