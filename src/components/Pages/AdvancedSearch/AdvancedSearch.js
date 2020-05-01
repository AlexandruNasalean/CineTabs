import React, { Component } from "react";
import "./AdvSearch.css";
import Cookies from "js-cookie";
import { AdvancedSearchResult } from "./AdvancedSearchResults.js";
import {Form} from "react-bootstrap";
import {generateAdvancedSearchUrl} from "./AdvanceSearchUtils";

export class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      searchResults: [],
      emptySearch: "",
      Genre : [],
        
    };

  }
  componentDidMount(){

       const url = Cookies.get("CookieSearchQuery");
      if(url) {
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

  CheckBoxChangeHandler = (event) => {
    console.log(event.target.name);
    const Genre = [...this.state.Genre];
    if(Genre.includes(event.target.name)){
      this.setState({
        Genre: Genre.filter(element =>( element !== event.target.name))
      })
    }
    else{
        Genre.push(event.target.name);
      this.setState({
        Genre
      })
    }

  }
  
  submitHandler = (e) => {
    e.preventDefault();
    const url = generateAdvancedSearchUrl(this.state);
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          searchResults: json.results,
        })
        Cookies.set("CookieSearchQuery",url);
        console.log(json.results);
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
    // console.log(this.state.searchResults);
    const { emptySearch, searchResults, Genre} = this.state;
    // const {checkBoxData, Action, Comedy} =this.state;
    // console.log(Cookies.get("SearchQueryURL"));
    console.log(Genre)
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
                    <div className="Genre-Filter">
                          {['checkbox'].map((type) => (
                          <div key={`inline-${type}`} className="mb-3">
                              <Form.Check inline label="Comedy" name="Comedy" value="Comedy" onClick={this.CheckBoxChangeHandler}/>
                              <Form.Check inline label="Action" name="Action" value="Action" onClick={this.CheckBoxChangeHandler}/>
                              <Form.Check inline label="Adventure" name="Adventure" value="Adventure" onClick={this.CheckBoxChangeHandler}/>


                          </div>
                          ))}
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
