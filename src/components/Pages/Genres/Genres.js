import React, {Component} from "react";
import Card from "react-bootstrap/Card";
import {Row, Col } from "react-bootstrap";
import SelectBox from './Components/SelectBox'
import App from "./GenreMovieFetch" ;
import './Genres.css'


export class Genres extends Component {
    render() {
        return (
            <div className="page-container">
<div className = "Genres-Container">
    <div className='Genre-Display' style={{margin: '16px', position: 'relative'}}>
        <SelectBox 
        className = "SelectBoxDropDownMenu"
        items={[
            { value:'Action', id: 1 },
            { value:'Adventure', id: 2 },
            { value:'Animation', id: 3 },
            { value:'Comedy', id: 4 },
            { value:'Crime', id: 5 },
            { value:'Documentary', id: 6 },
            { value:'Drama', id: 7 },
            { value:'Family', id: 8 },
            { value:'Fantasy', id: 9 },
            { value:'History', id: 10 },
            { value:'Horror', id: 11 },
            { value:'Mystery', id: 12 },
            { value:'Romance', id: 13 },
            { value:'Sci-Fi', id: 14 },
            { value:'Sport', id: 15 },
            { value:'Thriller', id: 16 },
            { value:'War', id: 17 },
            { value:'Western', id: 18 },

        ]}
          
        />
    </div>

    <div className = "movie-card-result">
        {/* <p> <App>moviefetch</App></p> */}
    </div>

</div>
</div>

        )
    }
}
