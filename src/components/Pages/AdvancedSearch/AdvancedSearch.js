import React, {Component} from "react";
import "./AdvSearch.css"
import Card from "react-bootstrap/Card";




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

    handleInputChange =(event) =>{
        this.setState(
            {
                query: event.target.value,
            }
        )
    }

    submitHandler = (e) =>{
        e.preventDefault();
        const searchQuery= this.state.query;
        const url=`https://movies-app-siit.herokuapp.com/movies?Title=${searchQuery}`
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            this.setState({
            searchResults: json.results,
            });
            if ( 
                json.results.length === 0 
                ) 
                {
                this.setState({
                emptySearch: true,
                })
            }
            else {
                this.setState({
                emptySearch: false,
                })
            }
        })
     
    }
    render() { 
        console.log(this.state.searchResults);
        const { emptySearch,searchResults } = this.state;
        console.log(emptySearch);
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
                        onChange={this.handleInputChange} />
                    </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            <div className="Adv-Results">
                
                            { emptySearch ? (
                            <React.Fragment>
                            <h1>No Results!</h1>
                            </React.Fragment>
                        ) : ( 
                            
                            searchResults.map((movie, index) =>(
                            <React.Fragment key={index}>
                          <div className="container-cards">
                          <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={movie.Poster} />
                          <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                              <Card.Text>
                              <ul>
                              <li>Year: {movie.Year}</li>
                              <li>Genre: {movie.Genre}</li>
                            <li>Language: {movie.Language}</li>
                              </ul>
                                </Card.Text>
                            </Card.Body>
                          </Card>
                          </div>
                            </React.Fragment>
                          
                            ))
                           )
                        }
             
            </div>
        </div>
         );
    }
}
 
