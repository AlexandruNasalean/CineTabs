import React, { Component } from "react";
import "./MoviePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

export class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoaded: false,
      movieID: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });

    const search = this.props.location.search;
    if (search) {
      const [_, id] = search.split("=");
      const url = `https://movies-app-siit.herokuapp.com/movies/${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            isLoaded: false,
            movie: json,
          });
        });
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    const { movie, isLoaded, currentMovieIndex } = this.state;

    return (
      <div id="movie-page-container">
        <h5>
          <FontAwesomeIcon icon={faArrowLeft} /> Back to search results
        </h5>
        {isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <React.Fragment key={currentMovieIndex}>
            <h2 id="title">{movie.Title}</h2>
            <div id="movie-page">
              <div className="poster-section">
                <img className="poster" src={movie.Poster} alt="" />
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
