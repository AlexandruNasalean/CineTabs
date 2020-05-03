import React, { Component } from "react";
import "../AdvSearch.css";

export class VotesFilter extends Component {
  render() {
    const { searchResults } = this.props;

    return (
      <div className="rating-searchbar">
        <label>User Rating</label>
        <div className="movie-rating">
          <p>From</p>
          <select className="rating-dropdown" name="movie-rating-drop-down">
            {searchResults.map((movieRating) => (
              <option key={movieRating} value={movieRating.imdbVotes}>
                {movieRating.imdbVotes}
              </option>
            ))}
          </select>
          <p>to</p>
          <select className="rating-dropdown" name="movie-rating-drop-down">
            {searchResults.map((movieRating) => (
              <option key={movieRating} value={movieRating.imdbVotes}>
                {movieRating.imdbVotes}
              </option>
            ))}
          </select>
        </div>
      </div>

      //   <div className="votes-searchbar">
      //     <label>Number of Votes</label>
      //     <div className="movie-votes">
      //       <p>From</p>
      //       <input
      //         className="form-control"
      //         id="min-votes"
      //         type="number"
      //         min="0"
      //         placeholder="fewest"
      //       />
      //       <p>to</p>
      //       <input
      //         className="form-control"
      //         id="max-votes"
      //         type="number"
      //         min="0"
      //         placeholder="most"
      //       />
      //     </div>
      //   </div>
    );
  }
}
