import React, { Component } from "react";
import SearchBar from "../PageComponents/searchbar";
import "./Homepage.css";
import { carouselFetch } from "./movieFetch";
import { Carouselu } from "../PageComponents/carousel";
import { BestMovie } from "./BestMovie";
import { HomePageRecomandation } from "./HomePageRecomandation.js";

export class HomePage extends Component {
  render() {
    return (
      <div className="HomePageFullContainer">
        <div className="container">
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
