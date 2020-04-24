import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export class Header extends Component {
  render() {
    const { isLoggedIn, username } = this.props;

    return (
      <div className="header">
        <li>
          <Link className="link-homepage" to="/">
            <img
              className="logo"
              src="https://i.imgur.com/r3dLpmN.png"
              alt="Smiley face"
            />
          </Link>
        </li>

        <ul className="menu-ul-list">
          <li>
            <Link className="link-header" to="/AllMovies">
              All Movies
            </Link>
          </li>
          <li>
            <Link className="link-header" to="/Genres">
              Genres
            </Link>
          </li>
          <li>
            <Link className="link" to="/AdvancedSearch">
              Advanced Search
            </Link>
          </li>
          {isLoggedIn ? (
            <li className="username">{username}</li>
          ) : (
            <React.Fragment>
              <li>
                <Link className="login" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="sign-up" to="/sign-up">
                  Sign-up
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      </div>
    );
  }
}
