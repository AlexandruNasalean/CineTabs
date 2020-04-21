import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

 export class Carouselu extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      movieData: [],
      isLoaded: false,
      index: [],
      }
  }
  componentDidMount() {
    fetch("https://movies-api-siit.herokuapp.com/movies?&take=8")
      .then((response) => response.json())
      .then((json) => {
          console.log(json);
        for (let i = 0; i < json.results.length; i++) {
          const movie = json.results[i];
    
          // console.log(movie);
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
    return (

      <Carousel className="Carousel" >
    <Carousel.Item>
      <img
        className="Carousel-image"
        src={movie.Poster}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Latest Movie Name 1st</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="Carousel-image"
        src={movie.Poster}
        alt="Third slide"
      />
    
      <Carousel.Caption>
        <h3>Latest Movie Name 2nd</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="Carousel-image"
        src={movie.Poster}
        alt="Third slide"
      />
    
      <Carousel.Caption>
        <h3>Latest Movie Name 3rd</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    );
  }
}
 