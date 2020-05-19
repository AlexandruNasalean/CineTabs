import React, { Component } from "react";
import {Form, Row, Col} from "react-bootstrap";
import { generateAdvancedSearchUrl } from "../AdvancedSearch/AdvanceSearchUtils";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Genres.css";
import Button from "react-bootstrap/Button";
import Paginations from "../AllMovies/Components/Pagination"





export class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Genre:[],
            movieData: [],
            pagination: [],
            paginationLinkNext: [],
            paginationLinkPrev: [],
            numberOfPages: [],
            selfPage: [],
            paginationSelfLinks: [],
            currentPage: [],
            emptySearch: true,
            
        };

      }
    componentDidMount(){
      this.setState({
        emptySearch: true,
      })
    }
    CheckBoxChangeHandler = (event) => {
        // console.log(event.target.name);
        const Genre = [...this.state.Genre];
        if (Genre.includes(event.target.name)) {
          this.setState({
            Genre: Genre.filter((element) => element !== event.target.name),
          });
        } else {
          Genre.push(event.target.name);
          this.setState({
            Genre,
          });
        }
      };

      submitHandler = (e) => {

        e.preventDefault();
        const genre = this.state.Genre
        const url = generateAdvancedSearchUrl(this.state, 1);
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
              this.setState({
                loading: false,
                movieData: json.results,
                paginationLinkNext: json.pagination.links.next,
                numberOfPages: json.pagination.numberOfPages,
                currentPage: json.pagination.currentPage,
                selfPage: json.pagination.links.self,
                emptySearch: false,
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
    const genre = this.state.Genre
    const Url = generateAdvancedSearchUrl(this.state,pageNumber);
    console.log(Url)
    fetch(Url)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        selfPage: json.pagination.links.self,
        movieData: json.results,
        paginationLinkNext: json.pagination.links.next,
          paginationLinkPrev: json.pagination.links.prev,
          numberOfPages: json.pagination.numberOfPages,
          currentPage: json.pagination.currentPage,
          selfPage: json.pagination.links.self,
          pagination: json.pagination,
        

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

  render() { 
    console.log(this.state.movieData)
    const {
        movies,
        index,
        movieData
      } = this.props;
      const {emptySearch} = this.state;
    return (  
        <div>
            <form className="col-lg-6 offset-lg-0" onSubmit={this.submitHandler}>
      <div className="Genre-Filter">
        <label>Please select a type of movie:</label>
      {['checkbox'].map((type) => (
      <div key={`inline-${type}`} className="mb-3" id="genre-filter">
          <Form.Check inline label="Comedy" name="Comedy" value="Comedy" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Action" name="Action" value="Action" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Adventure" name="Adventure" value="Adventure" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Family" name="Family" value="Family" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="History" name="History" value="History" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Mystery" name="Mystery" value="Mystery" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Sci-Fi" name="Sci-Fi" value="Sci-Fi" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="War" name="War" value="War" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Crime" name="Crime" value="Crime" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Fantasy" name="Fantasy" value="Fantasy" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Horror" name="Horror" value="Horror" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Sport" name="Sport" value="Sport" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Western" name="Western" value="Western" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Animation" name="Animation" value="Animation" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Documentary" name="Documentary" value="Documentary" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Drama	" name="Drama	" value="Drama	" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Romance" name="Romance" value="Romance" onClick={this.CheckBoxChangeHandler}/>
          <Form.Check inline label="Thriller" name="Thriller" value="Thriller" onClick={this.CheckBoxChangeHandler}/>
      </div>
      ))}
        <Button type="submit" className="GenreFilterButton">Submit</Button>
        

        </div>
        </form>
    <div>
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
      <div className="PaginationBox">
      {emptySearch ?("") : (<Paginations movieData={this.state.movieData} pagination={this.state.pagination}
        nextPage={this.nextPage} prevPage={this.PreviousPage} currentPage={this.state.currentPage} 
        numberOfPages={this.state.numberOfPages} selfPage={this.selfPage}/>)}
      </div>
      
      
    </div>

    </div>
    );
  }
}

