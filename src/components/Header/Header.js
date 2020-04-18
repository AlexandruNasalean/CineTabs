import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./Header.css";
import {LoginButton} from "./components/LoginButton"


export class Header extends Component {
    render() {

        return (
            <div className = "header">
                    <li><Link className="link-homepage" to="/"> <img className="logo" src="https://i.imgur.com/r3dLpmN.png" alt="Smiley face"/> </Link></li>
                
                <ul className = "menu-ul-list">
                    <li><Link className="link-header" to="/AllMovies">All Movies </Link></li>
                    <li><Link className="link-header" to="/Genres">Genres</Link></li>
                    <li><Link className="link" to="/AdvancedSearch">Advanced Search</Link></li>
                    <li><Link className="sign-up" to="/Sign-up">Sign-up</Link></li>
                </ul>
                <LoginButton>Login</LoginButton>
            </div> 
           
        )
    }
}
