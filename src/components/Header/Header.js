import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./Header.css";




export class Header extends Component {
    render() {

        return (
            <div className = "header">
                   <a href="/HomePage"> <img className="logo" src="https://i.imgur.com/r3dLpmN.png" alt="Smiley face"/> </a>
            
                <ul className = "menu-ul-list">
                    <li><Link className="link-header" to="/AllMovies">All Movies </Link></li>
                    <li><Link className="link-header" to="/Genres">Genres</Link></li>
                    <li><Link className="link" to="/AdvancedSearch">Advanced Search</Link></li>
                </ul>
            </div> 
           
        )
    }
}
