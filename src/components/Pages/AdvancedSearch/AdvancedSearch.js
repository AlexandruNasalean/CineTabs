import React, { Component } from "react";
import "./AdvSearch.css";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import { AdvancedSearchResult } from "./AdvancedSearchResults.js";
import { generateAdvancedSearchUrl } from "./AdvanceSearchUtils";
import { GenreFilter } from "./searchFilters/Genre";
import { RatingFilter } from "./searchFilters/RatingFilter";
import { VotesFilter } from "./searchFilters/VotesFilter";
import {
  extractUniqueRatings,
  extractUniqueVotes,
  extractUniqueRuntime,
  convertToNumbers,
} from "./searchFilters/filtersUtils";
import { CountryFilters } from "./searchFilters/CountryFilters";
import { RuntimeFilter } from "./searchFilters/RuntimeFilter";
import { YearFilter } from "./searchFilters/YearFilter";
import { LanguageFilters } from "./searchFilters/LanguageFilters";
import Paginations from "../AllMovies/Components/Pagination";

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
      minRuntime: null,
      maxRuntime: null,
      Genre: [],
      Country: [],
      Year: [],
      Runtime: [],
      Language: [],
      searchState: "",
      YearSelected: false,
      CountrySelected: false,
      LanguageSelected: false,
      setStatess: [],
      pagination: [],
      paginationLinkNext: [],
      paginationLinkPrev: [],
      numberOfPages: [],
      selfPage: [],
      paginationSelfLinks: [],
      homePageQuerry: [],
    };
  }

  componentDidMount() {
    if(this.props.history.location.state.homePageQuerry){
      this.setState({
        homePageQuerry: this.props.history.location.state.homePageQuerry,
      })
      console.log(this.state)
    }
    const url = Cookies.get("CookieSearchQuery");
    if (url) {
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          const uniqueRatings = extractUniqueRatings(json.results);
          const uniqueVotes = convertToNumbers(
            extractUniqueVotes(json.results)
          );
          const uniqueRuntime = convertToNumbers(
            extractUniqueRuntime(json.results)
          );

          this.setState({
            searchResults: json.results,
            minRating: uniqueRatings[0],
            maxRating: uniqueRatings[uniqueRatings.length - 1],
            minVotes: uniqueVotes[0],
            maxVotes: uniqueVotes[uniqueVotes.length - 1],
            minRuntime: uniqueRuntime[0],
            maxRuntime: uniqueRuntime[uniqueRuntime.length - 1],
            pagination: json.pagination,
            paginationLinkNext: json.pagination.links.next,
            paginationLinkPrev: json.pagination.links.prev,
            numberOfPages: json.pagination.numberOfPages,
            currentPage: json.pagination.currentPage,
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

  nextPage = (event) => {
    // const url = generateAdvancedSearchUrl(this.state,null,this.state.paginationLinkNext);
    // console.log(url);

    // var _ =  require  ('lodash');
    const url = this.state.paginationLinkNext;
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
          paginationLinkNext: json.pagination.links.next,
          paginationLinkPrev: json.pagination.links.prev,
          numberOfPages: json.pagination.numberOfPages,
          currentPage: json.pagination.currentPage,
          selfPage: json.pagination.links.self,
          pagination: json.pagination,
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

  PreviousPage = (event) => {
    const url = this.state.paginationLinkPrev;
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
          paginationLinkNext: json.pagination.links.next,
          paginationLinkPrev: json.pagination.links.prev,
          numberOfPages: json.pagination.numberOfPages,
          currentPage: json.pagination.currentPage,
          selfPage: json.pagination.links.self,
          pagination: json.pagination,
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

  selfPage = (pageNumber) => {
    const url = generateAdvancedSearchUrl(this.state, pageNumber);
    console.log(url);

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
          paginationLinkNext: json.pagination.links.next,
          paginationLinkPrev: json.pagination.links.prev,
          numberOfPages: json.pagination.numberOfPages,
          currentPage: json.pagination.currentPage,
          selfPage: json.pagination.links.self,
          pagination: json.pagination,
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

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value,
    });
  };

  checkCountryHandler = (event) => {
    console.log(event.target.value);
    console.log(event.target);
    if (!this.state.Country.includes(event.target.value)) {
      const Country = [...this.state.Country];

      Country.push(event.target.value);
      this.setState({
        Country,
        CountrySelected: true,
      });
    }
  };

  checkLanguageHandler = (event) => {
    console.log(event.target.value);
    // console.log(event.target);
    if (!this.state.Language.includes(event.target.value)) {
      const Language = [...this.state.Language];
      Language.push(event.target.value);
      this.setState({
        Language,
        LanguageSelected: true,
      });
    }
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

  YearChangeHandler = (event) => {
    console.log(event.target.value);
    if (!this.state.Year.includes(event.target.value)) {
      const Year = [...this.state.Year];
      Year.push(event.target.value);
      this.setState({
        Year,
        YearSelected: true,
      });
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    const url = generateAdvancedSearchUrl(this.state, 1);
    console.log(url);

    // var _ =  require  ('lodash');

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        const uniqueRatings = extractUniqueRatings(json.results);
        const uniqueVotes = convertToNumbers(extractUniqueVotes(json.results));
        const uniqueRuntime = convertToNumbers(
          extractUniqueRuntime(json.results)
        );

        this.setState({
          searchResults: json.results,
          minRating: uniqueRatings[0],
          maxRating: uniqueRatings[uniqueRatings.length - 1],
          minVotes: uniqueVotes[0],
          maxVotes: uniqueVotes[uniqueVotes.length - 1],
          minRuntime: uniqueRuntime[0],
          maxRuntime: uniqueRuntime[uniqueRuntime.length - 1],
          paginationLinkNext: json.pagination.links.next,
          numberOfPages: json.pagination.numberOfPages,
          currentPage: json.pagination.currentPage,
          selfPage: json.pagination.links.self,
          pagination: json.pagination,
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

  handleDeleteSearchQuerry = (event) => {
    Cookies.remove("CookieSearchQuery");

    this.setState({
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
      Language: [],
      searchState: "",
      YearSelected: false,
      CountrySelected: false,
      LanguageSelected: false,
      setStatess: [],
      pagination: [],
      paginationLinkNext: [],
      paginationLinkPrev: [],
      numberOfPages: [],
      selfPage: [],
      paginationSelfLinks: [],
    });
  };
  handleDeleteFilterQuerryYear = (event) => {
    this.setState({
      Year: [],
    });
  };
  handleDeleteFilterQuerryCountry = (event) => {
    this.setState({
      query: "",
      data: [],
      searchResults: [],
      emptySearch: "",
      minRating: null,
      maxRating: null,
      minVotes: null,
      maxVotes: null,
      minRuntime: null,
      maxRuntime: null,
      Genre: [],
      Country: [],
      Year: [],
      Runtime: [],
      Language: [],
      searchState: "",
      YearSelected: false,
      CountrySelected: false,
      LanguageSelected: false,
      setStatess: [],
    });
  };
  handleDeleteFilterQuerryYear = (event) => {
    this.setState({
      Year: [],
    });
  };
  handleDeleteFilterQuerryCountry = (event) => {
    this.setState({
      Country: [],
    });
  };
  handleDeleteFilterQuerryLanguage = (event) => {
    this.setState({
      Language: [],
    });
  };
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

  handleMinRuntimeChange = (minRuntime) => {
    this.setState({ minRuntime });
  };

  handleMaxRuntimeChange = (maxRuntime) => {
    this.setState({ maxRuntime });
  };

  render() {
    const {
      emptySearch,
      searchResults,
      minRating,
      maxRating,
      minVotes,
      maxVotes,
      minRuntime,
      maxRuntime,
      searchState,
      Country,
      Language,
      Year,
      YearSelected,
      CountrySelected,
      LanguageSelected,
    } = this.state;



    console.log(this.props.history);

    var _ = require("lodash");

    return (
      <div>
        <div className="Advanced-Filter">
          <form className="col-lg-6 offset-lg-0" onSubmit={this.submitHandler}>
            <div className="form-group">
              <div className="Title-SearchBar">
                <label id="Adv-Search-Title-Label" className="title-filter">
                  Title
                </label>
                <input
                  className="form-control"
                  type="text"
                  id="title-filterinput"
                  placeholder="Search for a Title"
                  onChange={this.handleInputChange}
                 
                />
              </div>
              <GenreFilter
                CheckBoxChangeHandler={this.CheckBoxChangeHandler}
              ></GenreFilter>
              <div className="Extra-Filters">
                {searchState ? (
                  <React.Fragment>
                    <YearFilter
                      YearChangeHandler={this.YearChangeHandler}
                      searchResults={searchResults}
                      Year={Year}
                      YearSelected={YearSelected}
                      handleDeleteFilterQuerryYear={
                        this.handleDeleteFilterQuerryYear
                      }
                    ></YearFilter>

                    <CountryFilters
                      Country={Country}
                      checkCountryHandler={this.checkCountryHandler}
                      searchResults={searchResults}
                      CountrySelected={CountrySelected}
                      handleDeleteFilterQuerryCountry={
                        this.handleDeleteFilterQuerryCountry
                      }
                    />

                    <LanguageFilters
                      Language={Language}
                      checkLanguageHandler={this.checkLanguageHandler}
                      searchResults={searchResults}
                      LanguageSelected={LanguageSelected}
                      Language={Language}
                      handleDeleteFilterQuerryLanguage={
                        this.handleDeleteFilterQuerryLanguage
                      }
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
                      minRuntime={minRuntime}
                      maxRuntime={maxRuntime}
                      onMinRuntimeChange={this.handleMinRuntimeChange}
                      onMaxRuntimeChange={this.handleMaxRuntimeChange}
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
          <div className="empty-search">
            <React.Fragment>
              {/* <Button onClick={this.handleDeleteSearchQuerry} className="Search-History-Delete">Delete the search history</Button> */}
              <h1>No Results!</h1>
            </React.Fragment>
          </div>
        ) : (
          <div className="Adv-Results">
            <AdvancedSearchResult
              minRating={minRating}
              maxRating={maxRating}
              minVotes={minVotes}
              maxVotes={maxVotes}
              minRuntime={minRuntime}
              maxRuntime={maxRuntime}
              searchResults={searchResults}
            />
          </div>
        )}
          {emptySearch ? ("") : (
             <div class="PaginationBox">
             <Paginations
               movieData={this.state.movieData}
               pagination={this.state.pagination}
               nextPage={this.nextPage}
               prevPage={this.PreviousPage}
               currentPage={this.state.currentPage}
               numberOfPages={this.state.numberOfPages}
               selfPage={this.selfPage}
               emptySearch={emptySearch}
             />
       </div>
          )}
      </div>
    );
  }
}
