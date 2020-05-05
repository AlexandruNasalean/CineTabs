import React, { Component } from "react";
import "../AdvSearch.css";
import { uniq } from "lodash";

export class RatingFilter extends Component {
  state = {
    minRating: null,
    maxRating: null,
  };

  handleOnChange = (event) => {
    const { minRating, maxRating } = this.state;
    this.props.filterByRating(minRating, maxRating);
    console.log(event.target.value);
  };

  render() {
    const { searchResults } = this.props;

    return (
      <div className="rating-filter">
        <label>User Rating</label>
        <div className="movie-rating">
          <p>From</p>
          <select className="rating-dropdown" name="movie-rating-drop-down">
            {searchResults.map((movie, index) => (
              <option key={index} value={movie.imdbRating}>
                {movie.imdbRating}
              </option>
            ))}
          </select>
          <p>to</p>
          <select className="rating-dropdown" name="movie-rating-drop-down">
            {searchResults.map((movie, index) => (
              <option key={index} value={movie.imdbRating}>
                {movie.imdbRating}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
