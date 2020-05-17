import React, { Component } from "react";
import Cookies from "js-cookie";
import "./EditMovie.css";

export class EditMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMovie: {},
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
    };
  }

  componentDidMount() {
    const movieLocalID = localStorage.getItem("movieID").replace(/["']/g, "");
    const urlEdit = `https://movies-app-siit.herokuapp.com/movies/${movieLocalID}`;
    fetch(urlEdit)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          currentMovie: json,
        });
        console.log(this.state.currentMovie);
      });
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  handleSaveButton = () => {
    const logInToken = Cookies.get("token");
    const movieLocalID = localStorage.getItem("movieID").replace(/["']/g, "");
    const urlEdit = `https://movies-app-siit.herokuapp.com/movies/${movieLocalID}`;

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
      Title: Title.value,
      Year: Year.value,
      Runtime: Runtime.value,
      Genre: Genre.value,
      Language: Language.value,
      Country: Country.value,
      Poster: Poster.value,
      imdbRating: imdbRating.value,
      imdbVotes: imdbVotes.value,
      imdbID: imdbID.value,
      Type: Type.value,
    };
    console.log(editedMovie);

    fetch(urlEdit, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "x-auth-token": logInToken,
      },
      body: JSON.stringify(editedMovie),
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        alert("The movie has been updated.");
        //   this.props.history.push("/AllMovies");
      });
  };

  render() {
    const { currentMovie } = this.state;

    return (
      <div className="form-container">
        <form className="edit-movie-form" onSubmit={this.handleSaveButton}>
          <div className="edit-inputs-container">
            <div className="first-group">
              <div className="input-fields">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  name="Title"
                  defaultValue={currentMovie.Title}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-fields">
                <label htmlFor="year">Year</label>
                <input
                  type="number"
                  name="Year"
                  defaultValue={currentMovie.Year}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-fields">
                <label htmlFor="runtime">Runtime</label>
                <input
                  type="text"
                  name="Runtime"
                  defaultValue={currentMovie.Runtime}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-fields">
                <label htmlFor="genre">Genre</label>
                <input
                  type="text"
                  name="Genre"
                  defaultValue={currentMovie.Genre}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-fields">
                <label htmlFor="language">Language</label>
                <input
                  type="text"
                  name="Language"
                  defaultValue={currentMovie.Language}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-fields">
                <label htmlFor="country">Country</label>
                <input
                  type="text"
                  name="Country"
                  defaultValue={currentMovie.Country}
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
                  defaultValue={currentMovie.Poster}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-fields">
                <label htmlFor="imdbRating">imdbRating</label>
                <input
                  type="text"
                  name="imdbRating"
                  defaultValue={currentMovie.imdbRating}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-fields">
                <label htmlFor="imdbVotes">imdbVotes</label>
                <input
                  type="text"
                  name="imdbVotes"
                  defaultValue={currentMovie.imdbVotes}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-fields">
                <label htmlFor="imdbID">imdbID</label>
                <input
                  type="text"
                  name="imdbID"
                  defaultValue={currentMovie.imdbID}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="input-fields">
                <label htmlFor="type">Type</label>
                <input
                  type="text"
                  name="Type"
                  defaultValue={currentMovie.Type}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>
          </div>
          <input type="submit" value="Save" className="submit-btn" />
        </form>
      </div>
    );
  }
}
