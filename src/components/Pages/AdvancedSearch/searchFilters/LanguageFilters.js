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
    const LanguageDeleteQuerry= Language.join(", ");
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
  {LanguageSelected ?(
         <Button onClick={handleDeleteFilterQuerryLanguage} className="QuerryButton"
         style={ LanguageDeleteQuerry ? ({ display:'inline-block'}) : {display : 'none'} }>
           {LanguageDeleteQuerry}<FontAwesomeIcon icon={faTimes} className="QuerryListIcon">
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