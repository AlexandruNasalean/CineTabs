import React, { Component } from "react";
import "../AdvSearch.css";
import { uniq } from "lodash";

export class VotesFilter extends Component {
  state = {
    minVotes: null,
    maxVotes: null,
  };

  handleOnChange = (event) => {
    this.props.filterByVotes();
  };

  render() {
    const { searchResults } = this.props;

    return (
      <div className="votes-filter">
        <label>Number of Votes</label>
        <div className="movie-votes">
          <p>From</p>
          <select className="votes-dropdown" name="movie-votes-drop-down">
            {searchResults.map((movie, index) => (
              <option key={index} value={movie.imdbVotes}>
                {movie.imdbVotes}
              </option>
            ))}
          </select>
          <p>to</p>
          <select className="votes-dropdown" name="movie-votes-drop-down">
            {searchResults.map((movie, index) => (
              <option key={index} value={movie.imdbVotes}>
                {movie.imdbVotes}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
