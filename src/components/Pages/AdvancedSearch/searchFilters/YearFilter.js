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
      componentDidMount(){
      const {YearChangeHandler} =this.props;

      }

  render() { 
    const {YearChangeHandler, searchResults,YearSelected,handleDeleteFilterQuerryYear,Year} =this.props;
    const YearFiltered = uniqBy(searchResults, 'Year')
    const OrderYear = convertToNumbersYears(YearFiltered);
    const YearDeleteQuerry= Year.join(", ");
    console.log(YearFiltered)
    return (
      <div className="year-filter">
        <label> Year of Release </label>
        <div className="year-filter">
        <select className="year-dropdown" onClick={YearChangeHandler}>
          { OrderYear.map((movie, index) =>(
              <option key={index} value={movie}>{movie}</option>
          ))}
        </select>
       {YearSelected ?(
         <Button onClick={handleDeleteFilterQuerryYear} className="QuerryButton"  
         style={ YearDeleteQuerry ? { display:'inline-block'} : {display : 'none'} }>
           {YearDeleteQuerry}<FontAwesomeIcon icon={faTimes} className="QuerryListIcon"></FontAwesomeIcon></Button>
          
       ) : (
        ""
       )
      }
      </div>
      </div>
    );
  }
}
 
