import React, { Component } from "react";
import Cookies from "js-cookie";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SimpleReactValidator from "simple-react-validator";
import "./EditMovie.css";

export class EditMovie extends Component {
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

  componentDidMount() {
    const movieLocalID = localStorage.getItem("movieID").replace(/["']/g, "");
    const urlEdit = `https://movies-app-siit.herokuapp.com/movies/${movieLocalID}`;

    fetch(urlEdit)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          Title: json.Title,
          Year: json.Year,
          Runtime: json.Runtime,
          Genre: json.Genre,
          Language: json.Language,
          Country: json.Country,
          Poster: json.Poster,
          imdbRating: json.imdbRating,
          imdbVotes: json.imdbVotes,
          imdbID: json.imdbID,
          Type: json.Type,
        });
      });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSaveButton = (e) => {
    e.preventDefault();
    const logInToken = Cookies.get("token");
    const movieLocalID = localStorage.getItem("movieID").replace(/["']/g, "");
    const urlEdit = `https://movies-app-siit.herokuapp.com/movies/${movieLocalID}`;
    console.log(urlEdit);

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
    const editedMovie = {
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
    console.log(editedMovie);

    if (this.validator.allValid()) {
      fetch(urlEdit, {
        method: "PUT",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": logInToken,
        },
        body: JSON.stringify(editedMovie),
        redirect: "follow",
        referrerPolicy: "no-referrer",
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
      Poster,
      imdbRating,
      imdbVotes,
      imdbID,
      Type,
    } = this.state;
    const logInToken = Cookies.get("token");

    return (
      <div className="form-container">
        {logInToken ? (
          <React.Fragment>
            <h3 id="edit-movie-heading">Edit and submit your changes:</h3>
            <form
              className="edit-movie-form"
              autoComplete="off"
              onSubmit={this.handleSaveButton}
            >
              <div className="edit-inputs-container">
                <div className="first-group">
                  <div className="input-fields">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      name="Title"
                      value={Title}
                      onChange={this.handleInputChange}
                    />
                    {this.validator.message("Title", Title, "required")}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="year">Year</label>
                    <input
                      type="number"
                      name="Year"
                      value={Year}
                      onChange={this.handleInputChange}
                    />
                    {this.validator.message("Year", Year, "required|integer")}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="runtime">Runtime</label>
                    <input
                      type="text"
                      name="Runtime"
                      value={Runtime}
                      onChange={this.handleInputChange}
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
                      type="text"
                      name="Genre"
                      value={Genre}
                      onChange={this.handleInputChange}
                    />
                    {this.validator.message("Genre", Genre, "required")}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="language">Language</label>
                    <input
                      type="text"
                      name="Language"
                      value={Language}
                      onChange={this.handleInputChange}
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
                      type="text"
                      name="Country"
                      value={Country}
                      onChange={this.handleInputChange}
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
                      type="text"
                      name="Poster"
                      value={Poster}
                      onChange={this.handleInputChange}
                    />
                    {this.validator.message("Poster", Poster, "required")}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="imdbRating">imdbRating</label>
                    <input
                      type="text"
                      name="imdbRating"
                      value={imdbRating}
                      onChange={this.handleInputChange}
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
                      type="text"
                      name="imdbVotes"
                      value={imdbVotes}
                      onChange={this.handleInputChange}
                    />
                    {this.validator.message(
                      "imdbVotes",
                      imdbVotes,
                      "required|alpha_num_dash_space"
                    )}
                  </div>
                  <div className="input-fields">
                    <label htmlFor="imdbID">imdbID</label>
                    <input
                      type="text"
                      name="imdbID"
                      value={imdbID}
                      onChange={this.handleInputChange}
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
                      type="text"
                      name="Type"
                      value={Type}
                      onChange={this.handleInputChange}
                    />
                    {this.validator.message(
                      "Type",
                      Type,
                      "required|alpha_num_dash_space"
                    )}
                  </div>
                </div>
              </div>
              <input type="submit" value="Save" className="submit-btn" />
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
                <p>Your modifications have been saved successfully.</p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.redirectPage}>OK</Button>
              </Modal.Footer>
            </Modal>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h3 id="add-movie__visitor-heading">
              Authentication is required to modify Cinetab's database.
            </h3>
          </React.Fragment>
        )}
      </div>
    );
  }
}
