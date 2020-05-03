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
        console.log(json);
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
      <div className="BestMovie2018">
        <div className="DescriptionBestMovie2018">
          <h3>
            The Most Appreciated Movie of 2018
            &#9733;&#9733;&#9733;&#9733;&#9733;
          </h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </p>

          <Link to="/AllMovies">
            <button type="button" className="btn btn-outline-warning">
              Discover All Good Movies
            </button>
          </Link>
        </div>
        <div>
          <img
            className="ImgBestMovie2018"
            src="https://image.freepik.com/free-vector/best-film-movie-award-golden-label-design_1017-12389.jpg"
            alt="empty"
          ></img>
        </div>
      </div>
    );
  }
}
