import React, { Component } from "react";
import Cookies from "js-cookie";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SimpleReactValidator from "simple-react-validator";
import "./AddMovie.css";

export class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.validator = new SimpleReactValidator({ autoForceUpdate: this });

    this.state = {
      Title: "",
      Year: "",
      Runtime: "",
      Genre: "",
      Language: "",
      Country: "",
      Poster: "",
      imdbRating: "",
      imdbVotes: "",
      imdbID: "",
      Type: "",
      show: false,
    };
  }

  handleAddMovie = (e) => {
    e.preventDefault();
    const {
      Title,
      Year,
      Runtime,
      Genre,
      Language,
      Country,
      Poster,
      imdbRating,
      imdbVotes,
      imdbID,
      Type,
    } = this.state;
    const newMovie = {
      Title,
      Year,
      Runtime,
      Genre,
      Language,
      Country,
      Poster,
      imdbRating,
      imdbVotes,
      imdbID,
      Type,
    };

    const logInToken = Cookies.get("token");

    if (this.validator.allValid()) {
      fetch("https://movies-app-siit.herokuapp.com/movies", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": logInToken,
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(newMovie),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
        });
      this.showModal();
    } else {
      this.validator.showMessages();
    }
  };

  updateInputValue = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  showModal = () => {
    this.setState({ show: true });
  };

  redirectPage = () => {
    this.props.history.push("/AllMovies");
  };

  render() {
    const {
      Title,
      Year,
      Runtime,
      Genre,
      Language,
      Country,
      imdbID,
      imdbRating,
      imdbVotes,
      Poster,
      Type,
    } = this.state;
    const logInToken = Cookies.get("token");

    return (
      <div className="form-container">
        {logInToken ? (
          <React.Fragment>
            <h3 id="add-movie-heading">Add a movie or a TV-series:</h3>
            <form
              className="add-movie-form"
              autoComplete="off"
              onSubmit={this.handleAddMovie}
            >
              <div className="add-inputs-container">
                <div className="first-group">
                  <div className="input-fields">
                    <label htmlFor="title">Title</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="Title"
                      value={Title}
                      placeholder="eg. The Godfather"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message("Title", Title, "required")}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="year">Year</label>
                    <input
                      className="add-movie-inputs"
                      type="number"
                      name="Year"
                      value={Year}
                      placeholder="Movie's year here"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message("Year", Year, "required|integer")}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="runtime">Runtime</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="Runtime"
                      value={Runtime}
                      placeholder="eg. 90 min"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message(
                      "Runtime",
                      Runtime,
                      "required|alpha_num_dash_space"
                    )}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="genre">Genre</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="Genre"
                      value={Genre}
                      placeholder="eg. Action, Drama, etc."
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message("Genre", Genre, "required")}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="language">Language</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="Language"
                      value={Language}
                      placeholder="eg. English"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message(
                      "Language",
                      Language,
                      "required|alpha"
                    )}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="country">Country</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="Country"
                      value={Country}
                      placeholder="eg. UK"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message(
                      "Country",
                      Country,
                      "required|alpha"
                    )}
                  </div>
                </div>
                <div className="second-group">
                  <div className="input-fields">
                    <label htmlFor="poster">Poster</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="Poster"
                      value={Poster}
                      placeholder="URL here"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message("Poster", Poster, "required")}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="imdbRating">imdbRating</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="imdbRating"
                      value={imdbRating}
                      placeholder="Between 0 and 10"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message(
                      "imdbRating",
                      imdbRating,
                      "required|numeric|min:0,num"
                    )}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="imdbVotes">imdbVotes</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="imdbVotes"
                      value={imdbVotes}
                      placeholder="Number of Votes"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message("imdbVotes", imdbVotes, "required")}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="imdbID">imdbID</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="imdbID"
                      value={imdbID}
                      placeholder="eg. tt9839146"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message(
                      "imdbID",
                      imdbID,
                      "required|alpha_num_dash_space"
                    )}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="type">Type</label>
                    <input
                      className="add-movie-inputs"
                      type="text"
                      name="Type"
                      value={Type}
                      placeholder="eg. Movie, TV-series, Game"
                      onChange={this.updateInputValue}
                    />
                    {this.validator.message("Type", Type, "required")}
                  </div>
                </div>
              </div>
              <input type="submit" value="Add Movie" className="submit-btn" />
            </form>
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={this.state.show}
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  Success!
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>Your movie has been added to the Cinetab database.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.redirectPage}>OK</Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3 id="add-movie__visitor-heading">
              Authentication is required to add to Cinetab's database.
            </h3>
          </React.Fragment>
        )}
      </div>
    );
  }
}
