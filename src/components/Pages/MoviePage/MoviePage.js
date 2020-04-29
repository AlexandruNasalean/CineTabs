import React, { Component } from "react";
import "./MoviePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export class MoviePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [],
      isLoaded: false,
      currentMovieIndex: 0,
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

  handleNext = () => {
    const { movieData, currentMovieIndex } = this.state;

    if (currentMovieIndex < movieData.length - 1) {
      this.setState({
        currentMovieIndex: currentMovieIndex + 1,
        isLoaded: true,
      });
    }
    console.log("next");
  };

  handleBack = () => {
    const { currentMovieIndex } = this.state;

    if (currentMovieIndex > 0) {
      this.setState({
        currentMovieIndex: currentMovieIndex - 1,
      });
    }
    console.log("back");
  };

  render() {
    const { isLoggedIn } = this.props;
    const { movieData, isLoaded, currentMovieIndex } = this.state;
    const movie = movieData[currentMovieIndex] || {};

    return (
      <div id="movie-page-container">
        {isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <React.Fragment key={currentMovieIndex}>
            <h2 id="title">{movie.Title}</h2>
            <div id="movie-page">
              <div className="poster-section">
                <img className="poster" src={movie.Poster} alt="" />
                <div className="buttons">
                  <button
                    id="back-button"
                    className={
                      "navigation-button" +
                      (currentMovieIndex === 0 ? " disabled" : "")
                    }
                    onClick={this.handleBack}
                  >
                    {"<"}
                  </button>
                  <button
                    id="next-button"
                    className={
                      "navigation-button" +
                      (currentMovieIndex === movieData.length - 1
                        ? " disabled"
                        : "")
                    }
                    onClick={this.handleNext}
                  >
                    {">"}
                  </button>
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
                {isLoggedIn ? (
                  <div className="Movie-Page-Buttons">
                    <Button>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}
