import React, { Component } from "react";
import SearchBar from "../PageComponents/searchbar";
import Card from "react-bootstrap/Card";
import "./Homepage.css";
import { carouselFetch } from "./movieFetch";
import { Carouselu } from "../PageComponents/carousel";
import { BestMovie } from "./BestMovie";
import { RecommandationPosters } from "./RecommandationPosters";
import { HomePageRecomandation } from "./HomePageRecomandation.js";

export class HomePage extends Component {
  render() {
    return (
      <div>
          <div className = "container">
        <h4 className="SearchBarText" id="search-bar" onClick={carouselFetch}>
          All the good movies are here:
        </h4>
        <SearchBar>SearchBar</SearchBar> 
          </div>
        <Carouselu></Carouselu>
        <BestMovie />

          <HomePageRecomandation>Movies for you.. ?</HomePageRecomandation>
      </div>
    );
  }
}
