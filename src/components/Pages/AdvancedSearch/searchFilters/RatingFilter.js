import React, { Component } from "react";
import "../AdvSearch.css";

export class RatingFilter extends Component {
  render() {
    const { searchResults } = this.props;

    return (
      <div className="rating-searchbar">
        <label>User Rating</label>
        <div className="movie-rating">
          <p>From</p>
          <select className="rating-dropdown" name="movie-rating-drop-down">
            {searchResults.map((movieRating) => (
              <option key={movieRating} value={movieRating.imdbRating}>
                {movieRating.imdbRating}
              </option>
            ))}
            {/* <select className="rating-dropdown" name="movie-rating">
            {this.state.searchResults
              .map((movieRating) => movieRating.imdbRating)
              .filter((item, index) => searchResults.indexOf(item) === index)
              .reduce(
                (unique, item) =>
                  unique.includes(item) ? unique : [...unique, item],
                []
              )
              .sort((movieRating) => (
                <option key={movieRating} value={movieRating.imdbRating}>
                  {movieRating.imdbRating}
                </option>
              ))} */}
          </select>
          <p>to</p>
          <select className="rating-dropdown" name="movie-rating-drop-down">
            {searchResults.map((movieRating) => (
              <option key={movieRating} value={movieRating.imdbRating}>
                {movieRating.imdbRating}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}
