import React, { Component } from "react";
import Cookies from "js-cookie";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./EditMovie.css";

export class EditMovie extends Component {
  constructor(props) {
    super(props);

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
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
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
                  </div>
                  <div className="input-fields">
                    <label htmlFor="year">Year</label>
                    <input
                      type="number"
                      name="Year"
                      value={Year}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-fields">
                    <label htmlFor="runtime">Runtime</label>
                    <input
                      type="text"
                      name="Runtime"
                      value={Runtime}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-fields">
                    <label htmlFor="genre">Genre</label>
                    <input
                      type="text"
                      name="Genre"
                      value={Genre}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-fields">
                    <label htmlFor="language">Language</label>
                    <input
                      type="text"
                      name="Language"
                      value={Language}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-fields">
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      name="Country"
                      value={Country}
                      onChange={this.handleInputChange}
                    />
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
                  </div>
                  <div className="input-fields">
                    <label htmlFor="imdbRating">imdbRating</label>
                    <input
                      type="text"
                      name="imdbRating"
                      value={imdbRating}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-fields">
                    <label htmlFor="imdbVotes">imdbVotes</label>
                    <input
                      type="text"
                      name="imdbVotes"
                      value={imdbVotes}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-fields">
                    <label htmlFor="imdbID">imdbID</label>
                    <input
                      type="text"
                      name="imdbID"
                      value={imdbID}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="input-fields">
                    <label htmlFor="type">Type</label>
                    <input
                      type="text"
                      name="Type"
                      value={Type}
                      onChange={this.handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <input
                type="submit"
                value="Save"
                className="submit-btn"
                onClick={this.showModal}
              />
            </form>
            <Modal
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={this.state.show}
              handleClose={this.hideModal}
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
