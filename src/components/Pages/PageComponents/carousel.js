import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'

 export class Carouselu extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        title: '',
        released: '',
        genre: '',
        plot: '',
        poster: '',
        index: '0',
      }
  }
  handleSelect = (e) => {
    console.log(this.state)
    fetch("https://movies-api-siit.herokuapp.com/movies?&take=50&skip=20", {
       method: "GET", 
       mode: "cors", 
       cache: "no-cache", 
       credentials: "same-origin", 
       headers: {
         "Content-Type": "application/json"
       },
       redirect: "follow", 
       referrerPolicy: "no-referrer",
       body: JSON.stringify({
         username: this.state.username,
         password: this.state.password,
       })
     })
       .then(response => response.json())
       .then(json => {
         console.log(json);
       })
   };
  render() {
    const {index} = this.state
    return (

      <Carousel className="Carousel" activeIndex={index}>
    <Carousel.Item>
      <img
        className="Carousel-image"
        src="https://i.imgur.com/8Z0Dl9T.jpg?1"
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
        src="https://i.imgur.com/vZYKEaf.jpg"
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
        src="https://i.imgur.com/DmBWHnt.jpg"
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
 