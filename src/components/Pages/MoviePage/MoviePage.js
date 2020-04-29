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
      index: 0,
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
    const { isLoggedIn } = this.props;
    const { movieData, isLoaded, index } = this.state;
    const movie = movieData[index] || {};

    return (
      <div id="movie-page-container">
        {isLoaded ? (
          <h1>Loading...</h1>
        ) : (
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
