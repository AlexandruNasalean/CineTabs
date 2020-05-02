import React, { Component } from "react";
import "./MoviePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import {
  faEdit,
  faTrash,
  faArrowLeft,
  faLessThanEqual,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      const url = `https://movies-app-siit.herokuapp.com/movies/${id}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            isLoaded: false,
            isDeleted: false,
            movie: json,
            movieID: id,
          });
        });
      localStorage.setItem("movieID", id);
    }
  }

  handleDeleteMovie(){
    const logInToken = Cookies.get("token");
    const movieLocalID = localStorage.getItem("movieID");
    const urlDelete = `https://movies-app-siit.herokuapp.com/movies/:${movieLocalID}`;
    console.log(urlDelete);
    console.log(logInToken);
    // fetch(urlDelete, {
    //   method: "DELETE",
    //   mode: "cors",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    //   headers: {
    //     "x-auth-token": "logInToken",
    //   },
    //   redirect: "follow",
    //   referrerPolicy: "no-referrer",
    //   body: JSON.stringify({
    //     username: this.state.username,
    //     password: this.state.password,
    //   }),
    // })
  }

  render() {
    const { isLoggedIn } = this.props;
    const { movie, isLoaded } = this.state;

    return (
      <div id="movie-page-container">
        <Link to="/AdvancedSearch">
          <h5>
            <FontAwesomeIcon icon={faArrowLeft} /> Back to search results
          </h5>
        </Link>
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
                    <Button onClick={this.handleDeleteMovie}>
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
