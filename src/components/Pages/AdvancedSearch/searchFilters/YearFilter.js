import React, { Component } from "react";
import { uniqBy } from "lodash";
import "../AdvSearch.css"

export class YearFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() { 
    const {YearChangeHandler, searchResults} =this.props;
    const YearFiltered = uniqBy(searchResults, 'Year')
    console.log(YearFiltered)
    return (
      <div className="year-filter">
        <label> Year of Release </label>
      <div className="year-filter">
        <select className="year-dropdown" onChange={YearChangeHandler}>
          { YearFiltered?.map((movie, index) =>(
              <option key={index} value={movie.Year}>{movie.Year}</option>
          ))}
        </select>
      </div>
      </div>
    );
  }
}
 
