import React, { Component } from "react";
import "../AdvSearch.css";
import { extractUniqueRatings } from "./filtersUtils";

export class RatingFilter extends Component {
  render() {
    const {
      searchResults,
      onMinRatingChange,
      onMaxRatingChange,
      minRating,
      maxRating,
    } = this.props;

    const uniqueRatings = extractUniqueRatings(searchResults);

    return (
      <div className="rating-filter">
        <label>User Rating</label>
        <div className="movie-rating">
          <p>From</p>
          <select
            className="rating-dropdown"
            name="movie-rating-drop-down"
            onChange={(event) => {
              onMinRatingChange(event.target.value);
            }}
            value={minRating || ""}
          >
            {uniqueRatings.map((movie, index) => (
              <option key={index} value={movie}>
                {movie}
              </option>
            ))}
          </select>
          <p>to</p>
          <select
            className="rating-dropdown"
            name="movie-rating-drop-down"
            onChange={(event) => {
              onMaxRatingChange(event.target.value);
            }}
            value={maxRating || ""}
          >
            {uniqueRatings.map((movie, index) => (
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
