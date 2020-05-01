import React, { Component } from "react";
import SearchBar from "../PageComponents/searchbar";
import Card from "react-bootstrap/Card";
import "./Homepage.css";
import { carouselFetch } from "./movieFetch";
import { Carouselu } from "../PageComponents/carousel";
export class HomePage extends Component {
  render() {
    return (
      <div>
          <div className = "searchsectionStyling">
        <h4 className="SearchBarText" id="search-bar" onClick={carouselFetch}>
          All the good movies are here:
        </h4>
        <SearchBar>SearchBar</SearchBar>
          </div>

        <Carouselu></Carouselu>
        <div className="BestMovie2018">
          <div className="DescriptionBestMovie2018">
            <h3>
              The Most Appreciated Movie of 2018
              &#9733;&#9733;&#9733;&#9733;&#9733;
            </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.{" "}
            </p>

            <a href="/AllMovies">
              <button type="button" className="btn btn-outline-warning">
                Discover All Good Movies
              </button>
            </a>
          </div>
          <div>
            <img
              className="ImgBestMovie2018"
              src="https://image.freepik.com/free-vector/best-film-movie-award-golden-label-design_1017-12389.jpg"
              alt="empty"
            ></img>
          </div>
        </div>

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
