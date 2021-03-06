import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./GenreMovieFetch.css";

export class App extends Component {
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

    //selectGenre = (GenreDropdownItem) => 
    fetch(`https://movies-app-siit.herokuapp.com/movies?Genre=Adventure`)
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
    console.log(this.state);

    return (
      <div className="MovieCard-Container">
        {this.state.movieData.map((movies, index) => (
          <Link to={`/MoviePage?id=${movies._id}`} key={index}>
            <div>
              <div className="MovieDataCard">
                <Row>
                  <Col sm={2}>
                    <Card style={{ width: "16rem", marginRight: "10px" }}>
                      <Card.Img
                        top
                        width="100%"
                        variant="top"
                        src={movies.Poster}
                      />
                      <Card.Body>
                        <Card.Title>{movies.Title}</Card.Title>
                        <Card.Text>
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

export default App;
