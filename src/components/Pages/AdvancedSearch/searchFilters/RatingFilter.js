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
  };

  // componentDidMount() {
  //   const { searchResults } = this.props;
  //   const movieRatings = searchResults.map((movie) => movie.imdbRating);
  //   console.log(movieRatings);

  //   if (movieRatings) {
  //     this.setState({
  //       uniqueRatings: uniq(movieRatings).sort(),
  //       minRating: this.state.uniqueRatings[0],
  //       maxRating: this.state.uniqueRatings[
  //         this.state.uniqueRatings.length - 1
  //       ],
  //     });
  //   }
  // }

  render() {
    const { searchResults } = this.props;
    const movieRatings = searchResults.map((movie) => movie.imdbRating);
    const uniqueRatings = uniq(movieRatings).sort();
    console.log(uniqueRatings);

    return (
      <div className="rating-filter">
        <label>User Rating</label>
        <div className="movie-rating">
          <p>From</p>
          <select className="rating-dropdown" name="movie-rating-drop-down">
            {uniqueRatings.map((movie, index) => (
              <option key={index} value={movie}>
                {movie}
              </option>
            ))}
          </select>
          <p>to</p>
          <select className="rating-dropdown" name="movie-rating-drop-down">
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
