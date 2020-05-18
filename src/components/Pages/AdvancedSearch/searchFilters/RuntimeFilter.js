import React, { Component } from "react";
import { extractUniqueRuntime, convertToNumbers } from "./filtersUtils";
import "../AdvSearch.css";

export class RuntimeFilter extends Component {
  render() {
    const {
      searchResults,
      onMinRuntimeChange,
      onMaxRuntimeChange,
      minRuntime,
      maxRuntime,
    } = this.props;

    const uniqueRuntime = convertToNumbers(extractUniqueRuntime(searchResults));

    return (
      <div className="runtime-filter">
        <label>Runtime</label>
        <div className="movie-votes">
          <p>From</p>
          <select
            className="runtime-dropdown"
            name="movie-runtime-drop-down"
            onChange={(event) => {
              onMinRuntimeChange(event.target.value);
            }}
            value={minRuntime || ""}
          >
            {uniqueRuntime.map((movie, index) => (
              <option key={index} value={movie}>
                {movie}
              </option>
            ))}
          </select>
          <p>to</p>
          <select
            className="runtime-dropdown"
            name="movie-runtime-drop-down"
            onChange={(event) => {
              onMaxRuntimeChange(event.target.value);
            }}
            value={maxRuntime || ""}
          >
            {uniqueRuntime.map((movie, index) => (
              <option key={index} value={movie}>
                {movie}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
