import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
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

  render() {
    return (
      <div>
        <div className="Title-SearchBar">
          <label id="Adv-Search-Title-Label">Title</label>
          <input
            className="form-control"
            type="text"
            id="filter"
            placeholder="Search for a Title"
            onChange={this.handleInputChange}
          />
        </div>
        <div className="Genre-Filter">
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Comedy"
                name="Comedy"
                value="Comedy"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Action"
                name="Action"
                value="Action"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Adventure"
                name="Adventure"
                value="Adventure"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Family"
                name="Family"
                value="Family"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="History"
                name="History"
                value="History"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Mystery"
                name="Mystery"
                value="Mystery"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Sci-Fi"
                name="Sci-Fi"
                value="Sci-Fi"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="War"
                name="War"
                value="War"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Crime"
                name="Crime"
                value="Crime"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Fantasy"
                name="Fantasy"
                value="Fantasy"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Horror"
                name="Horror"
                value="Horror"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Sport"
                name="Sport"
                value="Sport"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Western"
                name="Western"
                value="Western"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Animation"
                name="Animation"
                value="Animation"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Documentary"
                name="Documentary"
                value="Documentary"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Drama	"
                name="Drama	"
                value="Drama	"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Romance"
                name="Romance"
                value="Romance"
                onClick={this.CheckBoxChangeHandler}
              />
              <Form.Check
                inline
                label="Thriller"
                name="Thriller"
                value="Thriller"
                onClick={this.CheckBoxChangeHandler}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

fetch("https://movies-app-siit.herokuapp.com/movies", {
  method: "POST",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": "token",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: JSON.stringify({
    _id: this.state._id,
    Title: this.state.Title,
    Year: this.state.Year,
    Runtime: this.state.Runtime,
    Genre: this.state.Genre,
    Language: this.state.Language,
    Country: this.state.Country,
    Poster: this.state.Poster,
    imdbRating: this.state.imdbRating,
    imdbVotes: this.state.imdbVotes,
    imdbID: this.state.imdbID,
    Type: this.state.Type,
  }),
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    document.cookie = `token=${json.accessToken}`;
  });
