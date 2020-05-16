import React, { Component } from "react";
import "./AdvSearch.css";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import { AdvancedSearchResult } from "./AdvancedSearchResults.js";
import { Form } from "react-bootstrap";
import { generateAdvancedSearchUrl } from "./AdvanceSearchUtils";
import {GenreFilter} from  "./searchFilters/Genre"
import { RatingFilter } from "./searchFilters/RatingFilter";
import { VotesFilter } from "./searchFilters/VotesFilter";
import {
  extractUniqueRatings,
  extractUniqueVotes,
  convertToNumbers,
} from "./searchFilters/filtersUtils";
import { CountryFilters } from "./searchFilters/CountryFilters";
import { RuntimeFilter } from "./searchFilters/RuntimeFilter";
import { YearFilter } from "./searchFilters/YearFilter";
import { LanguageFilters} from "./searchFilters/LanguageFilters";

export class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      searchResults: [],
      emptySearch: "",
      minRating: null,
      maxRating: null,
      minVotes: null,
      maxVotes: null,
      Genre: [],
      Country: [],
      Year: [],
      Runtime: [],
      Language:[],
      searchState: "",
      YearSelected: false,
      CountrySelected: false,
      LanguageSelected: false,
    };
  }

  componentDidMount() {
    const url = Cookies.get("CookieSearchQuery");
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const uniqueRatings = extractUniqueRatings(json.results);
          const uniqueVotes = convertToNumbers(
            extractUniqueVotes(json.results)
          );

          this.setState({
            searchResults: json.results,
            minRating: uniqueRatings[0],
            maxRating: uniqueRatings[uniqueRatings.length - 1],
            minVotes: uniqueVotes[0],
            maxVotes: uniqueVotes[uniqueVotes.length - 1],
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

  checkCountryHandler = (event) =>{
    console.log(event.target.value);
    console.log(event.target);

    const Country = [...this.state.Country];

      Country.push(event.target.value);
      this.setState({
        Country,
        CountrySelected: true,
        
      });
  };

  checkLanguageHandler = (event) =>{
    console.log(event.target.value);
    // console.log(event.target);

    const Language = [...this.state.Language];
      Language.push(event.target.value);
      this.setState({
        Language,
        LanguageSelected: true,
      });
  };

  
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
  
  YearChangeHandler = (event) =>{
    console.log(event.target.value);
    const Year = [...this.state.Year];
        
      Year.push(event.target.value);
      this.setState({
        Year,
        YearSelected: true,
      });
  }

  CheckBoxChangeRuntimeHandler = (event) => {
    // console.log(event.target);
    const Runtime = [...this.state.Runtime];
    if (Runtime.includes(event.target.name)) {
      this.setState({
        Runtime: Runtime.filter((element) => element !== event.target.name),
      });
    } else {
      Runtime.push(event.target.name);
      this.setState({
        Runtime,
      });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const url = generateAdvancedSearchUrl(this.state);
    console.log(url);

    // var _ =  require  ('lodash');

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const uniqueRatings = extractUniqueRatings(json.results);
        const uniqueVotes = convertToNumbers(extractUniqueVotes(json.results));

        this.setState({
          searchResults: json.results,
          minRating: uniqueRatings[0],
          maxRating: uniqueRatings[uniqueRatings.length - 1],
          minVotes: uniqueVotes[0],
          maxVotes: uniqueVotes[uniqueVotes.length - 1],
        });
        Cookies.set("CookieSearchQuery", url);
        if (json.results.length === 0) {
          this.setState({
            emptySearch: true,
            searchState: false,
          });
        } else {
          this.setState({
            emptySearch: false,
            searchState: true,
          });
        }
      });
  };

  handleDeleteFilterQuerryYear = (event) =>{
      
  this.setState({
        Year: [],
      })
  }
  handleDeleteFilterQuerryCountry =(event) =>{
    this.setState({
      Country: [],
    })
  }
  handleDeleteFilterQuerryLanguage =(event) =>{
    this.setState({
      Language: [],
    })
  }
  handleMinRatingChange = (minRating) => {
    this.setState({ minRating });
  };

  handleMaxRatingChange = (maxRating) => {
    this.setState({ maxRating });
  };

  handleMinVotesChange = (minVotes) => {
    this.setState({ minVotes });
  };

  handleMaxVotesChange = (maxVotes) => {
    this.setState({ maxVotes });
  };

  filterByRuntime(minRuntime, maxRuntime) {
    this.setState({
      searchResults: this.state.searchResults.filter((movie) => {}),
    });
  }

  render() {
    const {
      emptySearch,
      searchResults,
      minRating,
      maxRating,
      minVotes,
      maxVotes,
      searchState,
      Country,
      Language,
      Year,
      YearSelected,
      CountrySelected,
      LanguageSelected,
    } = this.state;

    console.log(Language);
    var _ = require("lodash");
   

    return (
      <div>
      <div className="Adv-Results">
        <div className="Advanced-Filter">
          <form className="col-lg-6 offset-lg-0" onSubmit={this.submitHandler}>
            <div className="form-group">
              <div className="Title-SearchBar">
                <label id="Adv-Search-Title-Label" className="title-filter">Title</label>
                <input
                  className="form-control"
                  type="text"
                  id="title-filterinput"
                  placeholder="Search for a Title"
                  onChange={this.handleInputChange}
                />
              </div>
              <GenreFilter CheckBoxChangeHandler = {this.CheckBoxChangeHandler}></GenreFilter>
              <div className="Extra-Filters">
              {searchState ? (
              <React.Fragment>
               <YearFilter 
               YearChangeHandler={this.YearChangeHandler} 
               searchResults={searchResults} 
               Year={Year}
               YearSelected={YearSelected}
               handleDeleteFilterQuerryYear={this.handleDeleteFilterQuerryYear}

               ></YearFilter>

                <CountryFilters
                  Country={Country}
                  checkCountryHandler={this.checkCountryHandler}
                  searchResults={searchResults}
                  CountrySelected={CountrySelected}
                  handleDeleteFilterQuerryCountry={this.handleDeleteFilterQuerryCountry}
                />

                <LanguageFilters
                  Language={Language}
                  checkLanguageHandler={this.checkLanguageHandler}
                  searchResults={searchResults}
                  LanguageSelected={LanguageSelected}
                  Language={Language}
                  handleDeleteFilterQuerryLanguage={this.handleDeleteFilterQuerryLanguage}
                />

                <RatingFilter
                  minRating={minRating}
                  maxRating={maxRating}
                  onMinRatingChange={this.handleMinRatingChange}
                  onMaxRatingChange={this.handleMaxRatingChange}
                  searchResults={searchResults}
                />
                <VotesFilter
                  minVotes={minVotes}
                  maxVotes={maxVotes}
                  onMinVotesChange={this.handleMinVotesChange}
                  onMaxVotesChange={this.handleMaxVotesChange}
                  searchResults={searchResults}
                />
                <RuntimeFilter
                  searchResults={searchResults}
                  filterByRuntime={this.filterByRuntime}
                />
              </React.Fragment>
                    ) : (
                      ""
                    )}
              </div>
              <div className="AdvSearchButton">
              <Button type="submit" className="Adv-Search-Button">
                  Submit
                </Button>
                </div>
            </div>
          </form>
                  
        </div>
        {emptySearch ? (
        <React.Fragment>
          <h1>No Results!</h1>
        </React.Fragment>
      ) : (
        <AdvancedSearchResult
          minRating={minRating}
          maxRating={maxRating}
          minVotes={minVotes}
          maxVotes={maxVotes}
          searchResults={searchResults}
        />
      )}
      </div>
  
    </div>
    );
  }
}
