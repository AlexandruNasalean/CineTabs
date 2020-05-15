import React, { Component } from "react";
import Cookies from "js-cookie";
import "./AddMovie.css";

export class AddMovie extends Component {
  addNewMovie(newMovie) {
    const logInToken = Cookies.get("token");
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
        alert("Your movie has been added to the Cinetab database!");
        this.props.history.push("/AllMovies");
      });
  }

  handleAddButton = (e) => {
    console.log("works");
    const newMovie = {
      Title: this.refs.title.value,
      Year: this.refs.year.value,
      Runtime: this.refs.runtime.value,
      Genre: this.refs.genre.value,
      Language: this.refs.language.value,
      Country: this.refs.country.value,
      Poster: this.refs.poster.value,
      imdbRating: this.refs.imdbRating.value,
      imdbVotes: this.refs.imdbVotes.value,
      imdbID: this.refs.imdbID.value,
      Type: this.refs.type.value,
    };

    this.addNewMovie(newMovie);

    e.preventDefault();
  };

  render() {
    return (
      <div className="form-container">
        <form className="add-movie-form" onSubmit={this.handleAddButton}>
          <div className="first-group">
            <div className="input-fields">
              <label htmlFor="title">Title</label>
              <input type="text" name="title" ref="title" />
            </div>
            <div className="input-fields">
              <label htmlFor="year">Year</label>
              <input type="number" name="year" ref="year" />
            </div>
            <div className="input-fields">
              <label htmlFor="runtime">Runtime</label>
              <input type="text" name="runtime" ref="runtime" />
            </div>
            <div className="input-fields">
              <label htmlFor="genre">Genre</label>
              <input type="text" name="genre" ref="genre" />
            </div>
            <div className="input-fields">
              <label htmlFor="language">Language</label>
              <input type="text" name="language" ref="language" />
            </div>
            <div className="input-fields">
              <label htmlFor="country">Country</label>
              <input type="text" name="country" ref="country" />
            </div>
          </div>
          <div className="second-group">
            <div className="input-fields">
              <label htmlFor="poster">Poster</label>
              <input type="text" name="poster" ref="poster" />
            </div>
            <div className="input-fields">
              <label htmlFor="imdbRating">imdbRating</label>
              <input type="text" name="imdbRating" ref="imdbRating" />
            </div>
            <div className="input-fields">
              <label htmlFor="imdbVotes">imdbVotes</label>
              <input type="text" name="imdbVotes" ref="imdbVotes" />
            </div>
            <div className="input-fields">
              <label htmlFor="imdbID">imdbID</label>
              <input type="text" name="imdbID" ref="imdbID" />
            </div>
            <div className="input-fields">
              <label htmlFor="type">Type</label>
              <input type="text" name="type" ref="type" />
            </div>
          </div>
          <input type="submit" value="AddMovie" className="submit-btn" />
        </form>
      </div>
    );
  }
}

// export class AddMovie extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Title: "",
//       Year: "",
//       Runtime: "",
//       Genre: "",
//       Language: "",
//       Country: "",
//       Poster: "",
//       imdbRating: "",
//       imdbVotes: "",
//       imdbID: "",
//       Type: "",
//     };
//   }

//   handleAddMovie = (e) => {
//     e.preventDefault();
//     const newMovie = { [e.target.name]: e.target.value };
//     console.log(newMovie);

//     const logInToken = Cookies.get("token");
//     fetch("https://movies-app-siit.herokuapp.com/movies", {
//       method: "POST",
//       mode: "cors",
//       cache: "no-cache",
//       credentials: "same-origin",
//       headers: {
//         "Content-Type": "application/json",
//         "x-auth-token": logInToken,
//       },
//       redirect: "follow",
//       referrerPolicy: "no-referrer",
//       body: JSON.stringify(newMovie),
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(json);
//         this.props.history.push("/AllMovies");
//       });
//   };

//   updateInputValue = (e) => {
//     const newMovie = this.setState({
//       [e.target.name]: e.target.value,
//     });
//     return newMovie;
//   };

//   render() {
//     const {
//       Title,
//       Year,
//       Runtime,
//       Genre,
//       Language,
//       Country,
//       imdbID,
//       imdbRating,
//       imdbVotes,
//       Poster,
//       Type,
//     } = this.state;

//     return (
//       <div className="form-container">
//         <form className="add-movie-form" onSubmit={this.handleAddMovie}>
//           <div className="first-group">
//             <div className="input-fields">
//               <label htmlFor="title">Title</label>
//               <input
//                 type="text"
//                 name="Title"
//                 value={Title}
//                 placeholder="eg. The Godfather"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//             <div className="input-fields">
//               <label htmlFor="year">Year</label>
//               <input
//                 type="number"
//                 name="Year"
//                 value={Year}
//                 placeholder="Movie's year here"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//             <div className="input-fields">
//               <label htmlFor="runtime">Runtime</label>
//               <input
//                 type="text"
//                 name="Runtime"
//                 value={Runtime}
//                 placeholder="eg. 90 min"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//             <div className="input-fields">
//               <label htmlFor="genre">Genre</label>
//               <input
//                 type="text"
//                 name="Genre"
//                 value={Genre}
//                 placeholder="eg. Action, Drama, etc."
//                 onChange={this.updateInputValue}
//               />
//             </div>
//             <div className="input-fields">
//               <label htmlFor="language">Language</label>
//               <input
//                 type="text"
//                 name="Language"
//                 value={Language}
//                 placeholder="eg. English"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//             <div className="input-fields">
//               <label htmlFor="country">Country</label>
//               <input
//                 type="text"
//                 name="Country"
//                 value={Country}
//                 placeholder="eg. UK"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//           </div>
//           <div className="second-group">
//             <div className="input-fields">
//               <label htmlFor="poster">Poster</label>
//               <input
//                 type="text"
//                 name="Poster"
//                 value={Poster}
//                 placeholder="URL here"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//             <div className="input-fields">
//               <label htmlFor="imdbRating">imdbRating</label>
//               <input
//                 type="text"
//                 name="imdbRating"
//                 value={imdbRating}
//                 placeholder="Between 0 and 10"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//             <div className="input-fields">
//               <label htmlFor="imdbVotes">imdbVotes</label>
//               <input
//                 type="text"
//                 name="imdbVotes"
//                 value={imdbVotes}
//                 placeholder="Number of Votes"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//             <div className="input-fields">
//               <label htmlFor="imdbID">imdbID</label>
//               <input
//                 type="text"
//                 name="imdbID"
//                 value={imdbID}
//                 placeholder="alpha-numerical"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//             <div className="input-fields">
//               <label htmlFor="type">Type</label>
//               <input
//                 type="text"
//                 name="Type"
//                 value={Type}
//                 placeholder="Movie or TV-series"
//                 onChange={this.updateInputValue}
//               />
//             </div>
//           </div>
//           <input type="submit" value="AddMovie" className="submit-btn" />
//         </form>
//       </div>
//     );
//   }
// }
