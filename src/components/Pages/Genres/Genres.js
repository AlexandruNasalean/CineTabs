import React, { Component } from "react";
import {Form, Row, Col} from "react-bootstrap";
import { generateAdvancedSearchUrl } from "../AdvancedSearch/AdvanceSearchUtils";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export class Genres extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Genre:[],
            movieData: [],
        };

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
        const url = `https://movies-api-siit.herokuapp.com/movies?Genre=${genre}`
        console.log(url)
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
              this.setState({
                loading: false,
                movieData: json.results,
              });
            });
        }

  render() { 
    const {
        movies,
        index,
        movieData
      } = this.props;
  
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
        <button type="submit" className="GenreFilter--Button">Submit</button>
        

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
 ))
    </div>

    </div>
    );
  }
}

