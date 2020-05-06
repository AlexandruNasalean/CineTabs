import React, { Component } from "react";
import "../AdvSearch.css";
import { uniq } from "lodash";
import { convertToNumbers } from "./filtersUtils";

export class VotesFilter extends Component {
  render() {
    const {
      searchResults,
      onMinVotesChange,
      onMaxVotesChange,
      minVotes,
      maxVotes,
    } = this.props;
    const movieVotes = searchResults.map((movie) => movie.imdbVotes);
    console.log("movieVotes = ", movieVotes);
    const uniquemovieVotes = uniq(movieVotes);
    console.log("uniquemovieVotes = ", uniquemovieVotes);
    const uniqueVotes = convertToNumbers(uniquemovieVotes);
    console.log("uniqueVotes = ", uniqueVotes);
    console.log(typeof uniqueVotes[0]);

    return (
      <div className="votes-filter">
        <label>Number of Votes</label>
        <div className="movie-votes">
          <p>From</p>
          <select className="votes-dropdown" name="movie-votes-drop-down">
            {uniqueVotes.map((movie, index) => (
              <option key={index} value={movie}>
                {movie}
              </option>
            ))}
          </select>
          <p>to</p>
          <select className="votes-dropdown" name="movie-votes-drop-down">
            {uniqueVotes.map((movie, index) => (
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
