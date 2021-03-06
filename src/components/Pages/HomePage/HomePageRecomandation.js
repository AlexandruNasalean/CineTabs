import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HomePageRecomandation.css";
import { randomNumber } from "../PageComponents/utils";

export class HomePageRecomandation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [],
      loading: false,
      index: [],
      totalResults: 0,
      currentPage: 1,
      pagination: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch(`https://movies-app-siit.herokuapp.com/movies?take=4&skip=${randomNumber()}`)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          pagination: json.pagination,
          loading: false,
          movieData: json.results,
          totalResults: json.total_Results
        });
      });
  }

  
  render() {
    const { movieData, loading } = this.state;
    console.log(this.state);
    return (
      <div className="MovieCard-Container">
        {this.state.movieData.map((movies, index) => (
          <Link to={`/MoviePage?id=${movies._id}`} key={index}>
            <div className='movieDataCardContainer'>
              <div className="MovieDataCard">
                <Row id="row">
                  <Col sm={4}>
                    <Card style={{ width: "16rem", marginRight: "10px" }}>
                      <Card.Img
                        top
                        width="100%"
                        variant="top"
                        src={movies.Poster}
                      />
                      <Card.Body>
                        <Card.Title id="Card-Title">{movies.Title}</Card.Title>
                        <Card.Text id="Card-Text">
                          <li>Genre: {movies.Genre}</li>
                          <li>Rating: {movies.imdbRating}</li>

                          <li>Year: {movies.Year}</li>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </div>
          </Link>
        ))}
        
      </div>
    );
  }
}

