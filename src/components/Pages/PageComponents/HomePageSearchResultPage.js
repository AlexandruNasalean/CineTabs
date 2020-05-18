import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Paginations from "../AllMovies/Components/Pagination"

export class HomePageResults extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movieData: [],
      loading: false,
      index: [],
      totalResults: 0,
      pagination: [],
      paginationLinkNext: [],
      currentPage: [],
      paginationLinkPrev: [],
      numberOfPages: [],
      selfPage: [],
      paginationSelfLinks: [],
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
          paginationLinkNext: json.pagination.links.next,
          numberOfPages: json.pagination.numberOfPages,
          currentPage: json.pagination.currentPage,
          selfPage: json.pagination.links.self,
        });
      });
  }

  nextPage = () => {
    const Url = this.state.paginationLinkNext
    console.log(Url)
    fetch(Url)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        loading: false,
        movieData: json.results,
        pagination: json.pagination,
        currentPage: json.pagination.currentPage,
        paginationLinkNext: json.pagination.links.next,
        paginationLinkPrev: json.pagination.links.prev,
        numberOfPages: json.pagination.numberOfPages,
        selfPage: json.pagination.links.self,

      })
    });
    console.log(this.state.currentPage)
  }
  selfPage = (pageNumber) => {
    const Url = `	https://movies-app-siit.herokuapp.com/movies?take=10&skip=${(pageNumber - 1) * 10}`
    console.log(Url)
    fetch(Url)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        selfPage: json.pagination.links.self,
        movieData: json.results,
        paginationLinkNext: json.pagination.links.next,
        paginationLinkPrev: json.pagination.links.prev,
        selfPage: json.pagination.links.self,

      })
    });
    console.log(this.state.currentPage)
  }
  PreviousPage = () => {
    const Url = this.state.paginationLinkPrev
    fetch(Url)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        loading: false,
        pagination: json.pagination,
        movieData: json.results,
        currentPage: json.pagination.currentPage,
        paginationLinkNext: json.pagination.links.next,
        paginationLinkPrev: json.pagination.links.prev,
        numberOfPages: json.pagination.numberOfPages,
        selfPage: json.pagination.links.self,
      })
    });
  }

      // increasePageNumber = () => {
      //   Increase = Math.floor(this.state.pagination.currentPage + 1 )

      // }  

  render() {
    const { movieData, loading,currentPage, pagination } = this.state;


    return (
      <div className="AllMovie-Wrap">
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
          <div className='PaginationBox'>
        <Paginations movieData={this.state.movieData} pagination={this.state.pagination}
        nextPage={this.nextPage} prevPage={this.PreviousPage} currentPage={this.state.currentPage} numberOfPages={this.state.numberOfPages} selfPage={this.selfPage}/>
       </div>
      </div>
    );
  }
}

