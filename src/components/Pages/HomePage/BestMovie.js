import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getBestMovie } from "./BestMovieUtils";

export class BestMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      movie: {},
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch("https://movies-app-siit.herokuapp.com/movies?Year=2019")
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          loading: false,
          movie: getBestMovie(json.results),
        });
      });
  }

  render() {
    const { movie } = this.state;

    console.log(movie);

    return (
      <div className="BestMovie2019">
        <div className="DescriptionBestMovie2019">
          <h3>
            The Most Appreciated Movie of 2019
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </h3>
          <ul>
            <li>{movie.Title}</li>
            <li>{movie.Genre}</li>
            <li>Rating: {movie.imdbRating}</li>
            <li>Votes: {movie.imdbVotes}</li>
          </ul>

          <Link to="/AllMovies">
            <button type="button" className="btn btn-outline-warning">
              Discover All Good Movies
            </button>
          </Link>
        </div>
        <div>
          <Link to={`/MoviePage?id=${movie._id}`}>
            <img
              className="ImgBestMovie2019"
              src={movie.Poster}
              alt="empty"
            ></img>
          </Link>
        </div>
      </div>
    );
  }
}
