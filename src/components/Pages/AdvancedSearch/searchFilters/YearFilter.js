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
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    const {YearChangeHandler, searchResults,selected,handleDeleteFilterQuerryYear} =this.props;
    const YearFiltered = uniqBy(searchResults, 'Year')
    const OrderYear = convertToNumbersYears(YearFiltered);
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
         <Button onClick={handleDeleteFilterQuerryYear}><FontAwesomeIcon icon={faTimes}></FontAwesomeIcon></Button>
          
       ) : (
         ""
       )
      }
      </div>
      </div>
    );
  }
}
 
