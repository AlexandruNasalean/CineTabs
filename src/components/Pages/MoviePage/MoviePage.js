import React, { Component } from "react";
import "./MoviePage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";


export class MoviePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieData: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://movies-app-siit.herokuapp.com/movies")
      .then((response) => response.json())
      .then((json) => {
        //   console.log(json);
        for (let i = 0; i < json.results.length; i++) {
          const movie = json.results[i];
          console.log(movie);
          console.log(movie.Poster);
          this.setState({
            isLoaded: true,
            movieData: movie,
          });
        }
      });
  }

  render() {
    const movie = this.state.movieData;
    const {isLoggedIn} = this.props

    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log("loaded");
      return (
        <div id="movie-page-container">
          <h2 id="title">{movie.Title}</h2>
          <div id="movie-page">
            <div className="poster-section">
              <img className="poster" src={movie.Poster} alt="" />
              <div className="buttons">
                <button id="back-button">Back</button>
                <button id="next-button">Next</button>
              </div>
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
              { isLoggedIn ? (
                <div className="Movie-Page-Buttons">
                    <Button><FontAwesomeIcon icon={faEdit} /></Button>
                    <Button><FontAwesomeIcon icon={faTrash}/></Button>
                    </div>
                ) : (
                  ""
                )}
            </div>
          </div>
        </div>
        
      );
    }
  }
}
