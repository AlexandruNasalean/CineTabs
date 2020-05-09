import React, { Component } from "react";
import "../AdvSearch.css";
import { convertToNumbers, extractUniqueVotes } from "./filtersUtils";

export class VotesFilter extends Component {
  render() {
    const {
      searchResults,
      onMinVotesChange,
      onMaxVotesChange,
      minVotes,
      maxVotes,
    } = this.props;

    const uniqueVotes = convertToNumbers(extractUniqueVotes(searchResults));

    return (
      <div className="votes-filter">
        <label>Number of Votes</label>
        <div className="movie-votes">
          <p>From</p>
          <select
            className="votes-dropdown"
            name="movie-votes-drop-down"
            onChange={(event) => {
              onMinVotesChange(event.target.value);
            }}
            value={minVotes || ""}
          >
            {uniqueVotes.map((movie, index) => (
              <option key={index} value={movie}>
                {movie}
              </option>
            ))}
          </select>
          <p>to</p>
          <select
            className="votes-dropdown"
            name="movie-votes-drop-down"
            onChange={(event) => {
              onMaxVotesChange(event.target.value);
            }}
            value={maxVotes || ""}
          >
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
