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
      pagination: [],
      numberOfPages: [],
      paginationLinkNext: [],
      currentPages: []
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
          totalResults: json.total_Results,
          numberOfPages: json.pagination.numberOfPages,
          paginationLinkNext: json.pagination.links.next,
        });
        console.log(this.state.movieData)
      });
  }

  nextPage = () => {
    const Url = this.state.paginationLinkNext
    fetch(Url)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        loading: false,
        movieData: json.results,
        currentPage: this.state.pagination.currentPage + 1 

      })
      console.log(Url)
    });
  }
      // increasePageNumber = () => {
      //   Increase = Math.floor(this.state.pagination.currentPage + 1 )

      // }  

  render() {
    const { movieData, loading, currentPage, currentPages, pagination } = this.state;
    const numberPages = this.state.pagination.numberOfPages;
    console.log(numberPages)
    console.log(currentPages)
    console.log(pagination)
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
        {this.state.movieData.length >= 10 ? <Pagination movieData={this.state.movieData} pagination={this.state.pagination} pages={numberPages} 
        nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
       </div>
      </div>
    );
  }
}

export default App;
