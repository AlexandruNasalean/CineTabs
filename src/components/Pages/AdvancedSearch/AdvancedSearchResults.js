import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import "./AdvSearch.css";
import { Link } from "react-router-dom";
import { filterByRatingOrVotes } from "./AdvanceSearchUtils"

export class AdvancedSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      searchResults,
      minRating,
      maxRating,
      minVotes,
      maxVotes,
    } = this.props;

    return (
      searchResults
      .filter((movie) =>
        filterByRatingOrVotes(movie, minRating, maxRating, minVotes, maxVotes)
      )
      .map((movie, index) => (
        <Link to={`/MoviePage?id=${movie._id}`} key={index}>
                <div className="card" style={{width:"18rem"}}>
                <img className="card-img-top" src={movie.Poster} alt="{movie.Poster}" />
                <div className="card-body">
                  <h3 className="card-title">{movie.Title}</h3>
                  <p className="card-text"> 
                    <li>Year: {movie.Year}</li>
                     <li>Genre: {movie.Genre}</li>
                     <li>Language: {movie.Language}</li>
                    <li>Country: {movie.Country}</li></p>
                </div>
              </div>   
       
        </Link>
      ))
    )
  }
}

