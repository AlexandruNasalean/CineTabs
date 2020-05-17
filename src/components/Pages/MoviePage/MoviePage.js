import React, { Component } from "react";
import "./MoviePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
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
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });

    const search = this.props.location.search;
    // console.log(search);
    if (search) {
      const [_, id] = search.split("=");
      const localStorageData = localStorage.getItem(`movie_${id}`);

      if (localStorageData) {
        const data = JSON.parse(localStorageData);
        this.setState({
          isLoaded: false,
          movie: data,
        });
      } else {
        const url = `https://movies-app-siit.herokuapp.com/movies/${id}`;
        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            this.setState({
              isLoaded: false,
              movie: json,
            });
            localStorage.setItem(`movieID`, JSON.stringify(id));
          });
      }
    }
  }

  handleDeleteMovie = () => {
    const logInToken = Cookies.get("token");
    const movieLocalID = localStorage.getItem("movieID").replace(/["']/g, "");
    const urlDelete = `https://movies-app-siit.herokuapp.com/movies/${movieLocalID}`;
    console.log(urlDelete);
    console.log(logInToken);
    fetch(urlDelete, {
      method: "DELETE",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "x-auth-token": logInToken,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    }).then(() => {
      this.props.history.push("/AllMovies");
      localStorage.removeItem("id");
    });
  };

  goBack = () => {
    this.props.history.goBack();
  };

  goToEditMovie = () => {
    this.props.history.push("/editmovie");
  };

  render() {
    const { isLoggedIn } = this.props;
    const { movie, isLoaded } = this.state;

    return (
      <div id="movie-page-container">
        <h5 className="back-btn" onClick={this.goBack}>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </h5>
        {isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <React.Fragment key={movie}>
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
                    <Button onClick={this.goToEditMovie}>
                      <FontAwesomeIcon icon={faEdit} />
                    </Button>
                    <Button onClick={this.handleDeleteMovie}>
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
