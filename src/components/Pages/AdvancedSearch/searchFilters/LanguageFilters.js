import React, { Component } from "react";
// import Cookies from "js-cookie";
// import {Form} from "react-bootstrap";
import {Dropdown} from "react-bootstrap"
import { uniqBy } from "lodash";
import "./LanguageFilters.css"


export class LanguageFilters extends Component {

  render() {
    const {searchResults, checkLanguageHandler, Language}= this.props;
    const LanguageFiltered = uniqBy(searchResults, 'Language')
    console.log(LanguageFiltered)
    return ( 

  <div className="Language-filter">
  <label> Language </label>
<div className="language-filter">
  <select className="language-dropdown" onChange={checkLanguageHandler}>
    { LanguageFiltered?.map((movie, index) =>(
        <option key={index} value={movie.Language}>{movie.Language}</option>
    ))}
  </select>
</div>
</div>
  // </div>
     );
  }
}