import React, { Component } from "react";
import "./AdvSearch.css";
import Cookies from "js-cookie";
import { AdvancedSearchResult } from "./AdvancedSearchResults.js"

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
  componentDidMount(){
       const CookieSearchQuery = Cookies.get("CookieSearchQuery");
      if(CookieSearchQuery) {
        const url = `https://movies-app-siit.herokuapp.com/movies?Title=${CookieSearchQuery}`;
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
        })
        Cookies.set("CookieSearchQuery",searchQuery);
        if (json.results.length === 0) {
          this.setState({
            emptySearch: true,
          });
        } else {
          this.setState({
            emptySearch: false,


          });
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
            <AdvancedSearchResult searchResults={searchResults}/>
          )}
        </div>
      </div>
    );
  }
}
