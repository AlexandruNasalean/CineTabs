import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./MoviesFetch.css";
import Pagination from "./Components/Pagination"

export class App extends Component {
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

    fetch(`https://movies-app-siit.herokuapp.com/movies`)
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

  nextPage = (pageNumber) => {
    fetch(`https://movies-app-siit.herokuapp.com/movies?take=10&skip=${pageNumber}`)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        loading: false,
        movieData: json.results,
        currentPage: pageNumber,
        totalResults: json.total_Results
        
      })
      
      // console.log(this.state.totalResults)
    });
  }
  

  render() {
    const { movieData, loading } = this.state;
    console.log(this.state.movieData)
    // console.log(this.state);
    const numberPages = Math.floor(this.state.movieData.length + 10);  //Math.floor(this.state.totalResults / 10);// 
    // console.log(this.state.totalResults)
    // console.log(this.state.pagination.numberOfPages)
    console.log(numberPages)
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

        <div className='PaginationNumbering'>
        {this.state.movieData > 10 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
       </div>
      </div>
    );
  }
}

export default App;
