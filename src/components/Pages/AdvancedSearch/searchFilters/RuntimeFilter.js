import React, { Component } from "react";
import { uniqBy } from "lodash";
import "../AdvSearch.css";


export class RuntimeFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  render() {
    const { RuntimeHandler, searchResults } =this.props;
    const RuntimeFiltered = uniqBy(searchResults, 'Runtime')
    console.log(RuntimeFiltered)
    return (
      <div className="runtime-filter">
        <label>Runtime</label>
        <div className="movie-runtime">
          <select className="runtime-dropdown" onChange={RuntimeHandler}>
            {RuntimeFiltered?.map((movie, index) => (
              <option key={index} value={movie.Runtime}>{movie.Runtime}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
