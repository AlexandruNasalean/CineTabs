import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./AdvSearch.css"
import { Link } from "react-router-dom";


export class AdvancedSearchResult extends Component {
  
  constructor(props) {
    super(props);
    this.state = {  }
  }
  
  render() {
    const {searchResults} = this.props
    return ( 
      searchResults.map((movie, index) => (
        <Link to={`/MoviePage?id=${movie._id}`} key={index}>
          <div className="container-cards">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={movie.Poster} />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>
                  
                    <li>Year: {movie.Year}</li>
                    <li>Genre: {movie.Genre}</li>
                    <li>Language: {movie.Language}</li>
          
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Link>
      ))
     );
  }
}
 
