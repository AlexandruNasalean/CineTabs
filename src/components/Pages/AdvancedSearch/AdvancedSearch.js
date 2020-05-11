import React, { Component } from "react";
import "./AdvSearch.css";
import Cookies from "js-cookie";
import { AdvancedSearchResult } from "./AdvancedSearchResults.js";
import { Form } from "react-bootstrap";
import { generateAdvancedSearchUrl } from "./AdvanceSearchUtils";
import {GenreFilter} from  "./searchFilters/Genre"
import { RatingFilter } from "./searchFilters/RatingFilter";
import { VotesFilter } from "./searchFilters/VotesFilter";
import { CountryFilters } from "./searchFilters/CountryFilters";
import { RuntimeFilter } from "./searchFilters/RuntimeFilter";
import { YearFilter } from "./searchFilters/YearFilter";


export class AdvancedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      data: [],
      searchResults: [],
      emptySearch: "",
      Genre : [],
      Country: [],
      Year: [],
      Runtime: [],
      searchState: "",

    };
  }
  componentDidMount() {
    const url = Cookies.get("CookieSearchQuery");
    if (url) {
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
  checkCountryHandler = (event) =>{
    console.log(event.target.value);
    console.log(event.target);

    const Country = [...this.state.Country];

    if(Country.includes(event.target.value)){
      this.setState({
        Country: Country.filter(element =>( element !== event.target.value))
      })
    }
    else{
      Country.push(event.target.value);
      this.setState({
        Country
      })
    }

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
  YearChangeHandler = (event) =>{
    console.log(event.target.value);
    const Year = [...this.state.Year];
    if (Year.includes(event.target.value)) {
      this.setState({
        Year: Year.filter((element) => element !== event.target.value),
      });
    } else {
      Year.push(event.target.value);
      this.setState({
        Year,
      });
    }

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
        this.setState({
          searchResults: json.results,
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



  filterByRating(minRating, maxRating) {
    this.setState({
      searchResults: this.state.searchResults.filter((movie) => {}),
    });
  }

  filterByVotes(minVotes, maxVotes) {
    this.setState({
      searchResults: this.state.searchResults.filter((movie) => {}),
    });
  }

  filterByRuntime(minRuntime, maxRuntime){
    this.setState({
      searchResults: this.state.searchResults.filter((movie) => {}),
    });
      }
  
      

  render() {
    const { emptySearch, searchResults, searchState, Country, Year} = this.state;
    console.log(searchResults);
    var _ =  require  ('lodash');

    return (
      <div className="container-lg">
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
              <div className="Genre-Filter">
                    </div>
                    { searchState ?( 
                      <React.Fragment>
                        <YearFilter YearChangeHandler={this.YearChangeHandler} searchResults={searchResults} Year={Year}></YearFilter>
                       <CountryFilters Country = {Country} checkCountryHandler ={this.checkCountryHandler} searchResults={searchResults}/>
                       <RatingFilter
                         searchResults={searchResults}
                         filterByRating={this.filterByRating}
                       />
                       <VotesFilter
                         searchResults={searchResults}
                         filterByVotes={this.filterByVotes}
                       />
                       <RuntimeFilter
                       searchResults={searchResults}
                       filterByRuntime={this.filterByRuntime}
                       />

                       </React.Fragment>
                    ) : (
                      ""
                    )
                     }
                    
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
