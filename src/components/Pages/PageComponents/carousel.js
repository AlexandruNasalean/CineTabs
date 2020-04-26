import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";
import "./Carousel.css";
import { randomNumber } from "./utils";

export class Carouselu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [],
      loading: false,
      index: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(
      `https://movies-app-siit.herokuapp.com/movies?take=3&skip=${randomNumber()}`
    )
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          loading: false,
          movieData: json.results,
        });
      });
  }

  render() {
    const { movieData, loading } = this.state;
    return (
      <Carousel
        className={
          "Carousel Carouselu" +
          (movieData.length === 0 ? " hide-indicator" : "")
        }
      >
        {loading ? (
          <Spinner animation="border" />
        ) : (
          movieData.map((movie, index) => (
            <Carousel.Item key={index}>
              <img
                className="Carousel-image"
                src={movie.Poster}
                alt="First slide"
              />
              <Carousel.Caption className="carousel-second-half">
                <h3>{movie.Title}</h3>
                <p>
          {movie.Year}, {movie.Language}, {movie.Runtime}, {movie.Genre}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          ))
        )}
      </Carousel>
    );
  }
}
