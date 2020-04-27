import React, { Component } from "react";
import "./MoviePage.css";

export class MoviePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });

    fetch("https://movies-app-siit.herokuapp.com/movies")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          isLoaded: false,
          movieData: json.results,
        });
      });
  }

  render() {
    const { movieData, isLoaded } = this.state;

    return (
      <div id="movie-page-container">
        {isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          movieData.map((movie, index) => (
            <React.Fragment key={index}>
              <h2 id="title">{movie.Title}</h2>
              <div id="movie-page">
                <div className="poster-section">
                  <img className="poster" src={movie.Poster} alt="" />
                  <div className="buttons">
                    <button id="back-button">Back</button>
                    <button id="next-button">Next</button>
                  </div>
                </div>
                <div className="movie-details">
                  <ul>
                    <li>Year: {movie.Year}</li>
                    <li>Runtime: {movie.Runtime}</li>
                    <li>Genre: {movie.Genre}</li>
                    <li>Language: {movie.Language}</li>
                    <li>Country: {movie.Country}</li>
                    <li>Cinetab rating: {movie.imdbRating}</li>
                    <li>Cinetab votes: {movie.imdbVotes}</li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ))
        )}
      </div>
    );
  }
}
