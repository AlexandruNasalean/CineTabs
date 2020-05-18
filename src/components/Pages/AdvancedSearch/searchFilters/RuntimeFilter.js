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
    // console.log(RuntimeFiltered)
    return (
      <div className="runtime-filter">
        <label>Runtime</label>
        <div className="movie-votes">
          <p>From</p>
          <select className="runtime-dropdown" name="movie-runtime-drop-down">
            {searchResults.map((movie, index) => (
              <option key={index} value={movie.imdbRuntime}>
                {movie.imdbRuntime}
              </option>
            ))}
          </select>
          <p>to</p>
          <select className="runtime-dropdown" name="movie-runtime-drop-down">
            {searchResults.map((movie, index) => (
              <option key={index} value={movie.imdbRuntime}>
                {movie.imdbRuntime}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
