import React, { Component } from "react";
import "./AdvSearch.css";
import Cookies from "js-cookie";
import { AdvancedSearchResult } from "./AdvancedSearchResults.js";
import { RatingFilter } from "./searchFilters/RatingFilter";
import { VotesFilter } from "./searchFilters/VotesFilter";

export class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      searchResults: [],
      emptySearch: "",
    };
  }
  componentDidMount() {
    const SerachQuerry = Cookies.get("SearchQuery");

    if (SerachQuerry) {
      const searchQuery = this.state.query;
      const url = `https://movies-app-siit.herokuapp.com/movies?Title=${SerachQuerry}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            searchResults: json.results,
          });
          if (json.results.length === 0) {
            this.setState({
              emptySearch: true,
            });
          } else {
            this.setState({
              emptySearch: false,
            });
            Cookies.set("SearchQuery", searchQuery);
          }
        });
    }
  }
  handleInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const searchQuery = this.state.query;
    const url = `https://movies-app-siit.herokuapp.com/movies?Title=${searchQuery}`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          searchResults: json.results,
        });
        if (json.results.length === 0) {
          this.setState({
            emptySearch: true,
          });
        } else {
          this.setState({
            emptySearch: false,
          });
          Cookies.set("SearchQuery", searchQuery);
        }
      });
  };
  render() {
    console.log(this.state.searchResults);
    const { emptySearch, searchResults } = this.state;
    // console.log(emptySearch);
    // console.log(Cookies.get("SearchQueryURL"));

    return (
      <div className="container-lg">
        <div className="Advanced-Filter">
          <form className="col-lg-6 offset-lg-3" onSubmit={this.submitHandler}>
            <div className="form-group">
              <div className="Title-SearchBar">
                <label id="Adv-Search-Title-Label">Title</label>
                <input
                  className="form-control"
                  type="text"
                  id="filter"
                  placeholder="Search for a Title"
                  onChange={this.handleInputChange}
                />
              </div>
              <RatingFilter searchResults={searchResults} />
              <VotesFilter searchResults={searchResults} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="Adv-Results">
          {emptySearch ? (
            <React.Fragment>
              <h1>No Results!</h1>
            </React.Fragment>
          ) : (
            <AdvancedSearchResult searchResults={searchResults} />
          )}
        </div>
      </div>
    );
  }
}
