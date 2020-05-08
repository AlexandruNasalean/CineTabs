import React, { Component } from "react";
import "../AdvSearch.css";
import { uniq } from "lodash";

export class RuntimeFilter extends Component {
  state = {
    minRuntime: null,
    maxRuntime: null,
  };

  handleOnChange = (event) => {
    const {minRuntime, maxRuntime} = this.state;
    this.props.filterByRuntime(minRuntime, maxRuntime);
console.log(event.target.value);  
  };

  render() {
    const { searchResults } = this.props;

    return (
      <div className="runtime-filter">
        <label>Runtime</label>
        <div className="movie-runtime">
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
