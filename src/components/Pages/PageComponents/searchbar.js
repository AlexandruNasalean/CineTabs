import React, { Component } from "react";
import "./searchbar.css";
class SearchBar extends Component {
  state = {
    query: "",
    data: [],
    searchString: [],
  };

  handleInputChange = (event) => {
    this.setState(
      {
        query: event.target.value,
      },
      () => {
        this.filterArray();
      }
    );
  };

  getData = () => {
    // fetch(`https://movies-app-siit.herokuapp.com/`)
    //   .then((response) => response.json())
    //   .then((responseData) => {
    //     // console.log(responseData)
    //     this.setState({
    //       data: responseData,
    //       searchString: responseData,
    //     });
    //   });
  };

  filterArray = () => {
    let searchString = this.state.query;
    let responseData = this.state.data;

    if (searchString.length > 0) {
      // console.log(responseData[i].name);
      responseData = responseData.filter(searchString);
      this.setState({
        responseData,
      });
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            className="searchbar"
            type="text"
            id="filter"
            placeholder="Search for..."
            onChange={this.handleInputChange}
          />
        </form>
        <div>
          {
            //  this.state.responseData.map((i) =>
            //       <p>{i.name}</p>
            //   )
          }
        </div>
      </div>
    );
  }
}

export default SearchBar;
