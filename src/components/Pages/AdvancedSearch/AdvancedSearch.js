import React, {Component} from "react";
import "./AdvSearch.css"



export class AdvancedSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            query: "",
            data: [],
            searchString: [],
            emptySearch: false,
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
            searchString: json.results,
            })
        })
    }
    render() { 
        console.log(this.state.searchString)

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
            <div className="Adv-Results"></div>
        </div>
         );
    }
}
 
