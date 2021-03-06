import React, { Component } from "react";
import "./MoviePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import {
  faEdit,
  faTrash,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      isLoaded: false,
      show: false,
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: true });

    const search = this.props.location.search;
    console.log(search);
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

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
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
                  <li className="movie-information">Year: {movie.Year}</li>
                  <li className="movie-information">
                    Runtime: {movie.Runtime}
                  </li>
                  <li className="movie-information">Genre: {movie.Genre}</li>
                  <li className="movie-information">
                    Language: {movie.Language}
                  </li>
                  <li className="movie-information">
                    Country: {movie.Country}
                  </li>
                  <li className="movie-information">
                    Cinetab rating: {movie.imdbRating}
                  </li>
                  <li className="movie-information">
                    Cinetab votes: {movie.imdbVotes}
                  </li>
                </ul>
                {isLoggedIn ? (
                  <div className="Movie-Page-Buttons">
                    <Button>
                      <Link
                        to={`/editmovie?id=${movie._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    </Button>
                    <Button onClick={this.showModal}>
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                    <Modal
                      size="lg"
                      aria-labelledby="contained-modal-title-vcenter"
                      centered
                      show={this.state.show}
                      handleClose={this.hideModal}
                    >
                      <Modal.Header>
                        <Modal.Title id="contained-modal-title-vcenter">
                          DELETE
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <p>Are you sure?</p>
                      </Modal.Body>
                      <Modal.Footer>
                        <Button onClick={this.handleDeleteMovie}>OK</Button>
                        <Button onClick={this.hideModal}>
                          No, just kidding.
                        </Button>
                      </Modal.Footer>
                    </Modal>
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
