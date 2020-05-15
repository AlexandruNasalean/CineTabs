import React, { Component } from "react";
// import Cookies from "js-cookie";
// import {Form} from "react-bootstrap";
import {Dropdown} from "react-bootstrap"
import { uniqBy } from "lodash";
import "../AdvSearch.css"
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons'


export class LanguageFilters extends Component {

  render() {
    const {searchResults, checkLanguageHandler, Language, handleDeleteFilterQuerryLanguage,LanguageSelected}= this.props;
    const LanguageFiltered = uniqBy(searchResults, 'Language')
    console.log(LanguageFiltered)
    return ( 

  <div className="language-filter">
  <label> Language </label>
  <select className="language-dropdown" onChange={checkLanguageHandler}>
    { LanguageFiltered?.map((movie, index) =>(
        <option key={index} value={movie.Language}>{movie.Language}</option>
    ))}
  </select>
  {LanguageSelected ?(
         <Button onClick={handleDeleteFilterQuerryLanguage} className="QuerryButton">{Language}<FontAwesomeIcon icon={faTimes} className="QuerryListIcon"></FontAwesomeIcon></Button>
          
       ) : (
         ""
       )
      }
</div>
  // </div>
     );
  }
}