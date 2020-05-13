import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons'



export class Header extends Component {
  render() {
    const { isLoggedIn, username, onShowLogOutModal } = this.props;

    return (
      <div className="header">
        <ul className="menu-ul-list">
          <li>
            <Link className="link-homepage" to="/">
              <img
                className="logo"
                src="https://i.imgur.com/r3dLpmN.png"
                alt="Smiley face"
              />
            </Link>
          </li>
          <li>
            <Link className="link-header" to="/AllMovies">
              <p>All Movies</p>
            </Link>
          </li>
          <li>
            <Link className="link-header" to="/Genres">
              <p>Genres</p>
            </Link>
          </li>
          <li>
            <Link className="link" to="/AdvancedSearch">
              <p>Advanced Search</p>
            </Link>
          </li>
        </ul>
        <div>
          <ul className="on-login-buttons">
            {isLoggedIn ? (
              <React.Fragment>
                <li>
                  <Link to="/addmovie"><p>Add Movie</p></Link>
                </li>
                <li className="username"><FontAwesomeIcon icon={faUser} className="usernameIcon"/>
                  {username}</li>
                <Button onClick={onShowLogOutModal} className="log-out-Button"><FontAwesomeIcon icon={faSignOutAlt}/>
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <li>
                  <Link className="login" to="/login">
                    <p>Login</p>
                  </Link>
                </li>
                <li>
                  <Link className="sign-up" to="/sign-up">
                    <p>Sign-up</p>
                  </Link>
                </li>
              </React.Fragment>
            )}
          </ul>
        </div>
      </div>
    );
  }
}
