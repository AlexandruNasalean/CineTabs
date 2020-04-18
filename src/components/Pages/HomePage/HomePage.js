import React, { Component } from "react";
import {SearchBar} from "../PageComponents/searchbar"
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import "./Homepage.css";

export class HomePage extends Component {
    render() {

        return (
        <div>
            <h1> 
                HomePage (loc de pus SearchBar)
            </h1>
  <div>
  <Carousel className="Carousel">
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
  </div>

<div className="BestMovie2019">
    <div className="DescriptionBestMovie2019">
        <h4>Cel mai apreciat film al anului 2019</h4>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
    </div>
    <div>
        <img className="ImgBestMovie2019" src="https://i.imgur.com/Qpw6j8D.png"></img>
    </div>
</div>

<div className="MovieRecomandation">
    <div>
<Card className="MovieCard" style={{ width: '18rem' }}>
  <Card.Body>
      <Card.Title>Genre</Card.Title>
    <Card.Title>Movie Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Img className="MovieCardIMG" variant="top" src="https://i.imgur.com/FqWEGYp.jpg" />
</Card>
    </div>
    <div>
<Card className="MovieCard" style={{ width: '18rem' }}>
  <Card.Body>
      <Card.Title>Genre</Card.Title>
    <Card.Title>Movie Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Img className="MovieCardIMG" variant="top" src="https://i.imgur.com/FTqi2K1.jpg" />
</Card>
    </div>
    <div>
<Card className="MovieCard" style={{ width: '18rem' }}>
  <Card.Body>
      <Card.Title>Genre</Card.Title>
    <Card.Title>Movie Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Img className="MovieCardIMG" variant="top" src="https://i.imgur.com/ztDeqPu.jpg" />
</Card>
    </div>
    <div>
<Card className="MovieCard" style={{ width: '18rem' }}>
  <Card.Body>
      <Card.Title>Genre</Card.Title>
    <Card.Title>Movie Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <Card.Img className="MovieCardIMG" variant="top" src="https://i.imgur.com/GC289mK.jpg" />
</Card>
    </div>


</div>




        </div>
        )
    }
}
