import React, { Component } from "react";
import SearchBar from "../PageComponents/searchbar";
import Card from "react-bootstrap/Card";
import "./Homepage.css";
import { carouselFetch } from "./movieFetch";
import { Carouselu } from "../PageComponents/carousel";
import { BestMovie } from "./BestMovie";
export class HomePage extends Component {
  render() {
    return (
      <div>
        <h4 className="SearchBarText" id="search-bar" onClick={carouselFetch}>
          All the good movies are here:
        </h4>
        <SearchBar>SearchBar</SearchBar>

        <Carouselu></Carouselu>
        <BestMovie />

        <div className="MovieRecomandation">
          <div>
            <Card className="MovieCard" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Genre</Card.Title>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Img
                className="MovieCardIMG"
                variant="top"
                src="https://i.imgur.com/FqWEGYp.jpg"
              />
            </Card>
          </div>
          <div>
            <Card className="MovieCard" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Genre</Card.Title>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Img
                className="MovieCardIMG"
                variant="top"
                src="https://i.imgur.com/FTqi2K1.jpg"
              />
            </Card>
          </div>
          <div>
            <Card className="MovieCard" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Genre</Card.Title>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Img
                className="MovieCardIMG"
                variant="top"
                src="https://i.imgur.com/ztDeqPu.jpg"
              />
            </Card>
          </div>
          <div>
            <Card className="MovieCard" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Genre</Card.Title>
                <Card.Title>Movie Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Img
                className="MovieCardIMG"
                variant="top"
                src="https://i.imgur.com/GC289mK.jpg"
              />
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
