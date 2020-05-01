import React from "react";
import "./searchbar.css";


class SearchBar extends React.Component {
constructor( props ) {
  super(props);

  this.state = {
    query: '',
    results: {},
    loading: false,
    message: ''
  }

  
}

fetchSearchResults = (query) => {
 // const pageNumber = updatePageNo ? `` 
  
 const searchUrl = `https://movies-app-siit.herokuapp.com/movies?Title=${query}`;
 fetch (searchUrl)
    .then((response) => response.json())
    .then((json) => {
      this.setState({
        results: json.results,
      })
    })

}
onKeyDown = (event) => {
  if (event.key === "Enter") {
    this.fetchSearchResults ( this.state.query)
  }
}




handleOnInputChange = ( event ) => {
  const query = event.target.value;
  //console.log(query);
  this.setState({ query} );
};


  render() {
    
    const { query} = this.state;
    console.log(this.state)
    return(
        <div className="searchbarcontainer">
       <input
       type="text"
       name="query"
       value={query}
       id="search-input"
       placeholder="Search your movie..."
       onChange={this.handleOnInputChange}
       onKeyDown={this.onKeyDown}
       />
        </div>
    )
  }
}

    
export default SearchBar;
