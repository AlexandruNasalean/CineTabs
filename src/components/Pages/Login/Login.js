import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Cookies from "js-cookie";
import "./Login.css";
import {
  getLoginTitle,
  getLoginIcon,
  getLoginButtonText,
  getLoginUrl,
} from "./LoginUtils";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);

    const {
      location: { pathname },
    } = this.props;

    const url = getLoginUrl(pathname);

    fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          error: json.message,
        });

        if (
          json.message !== "Username already existing" &&
          json.message !== "Wrong password" &&
          json.message !== "User not found"
        ) {
          Cookies.set("token", json.accessToken);
          Cookies.set("username", this.state.username);
          this.props.onLogin(this.state.username, json.accessToken);
          this.props.history.push("/");
        }
      });
  };
  render() {
    const { username, password } = this.state;

    // location will not appear if the component it is not used with route component
    const {
      location: { pathname },
    } = this.props;
    // const pathname = this.props.location.pathname;

    const title = getLoginTitle(pathname);
    const icon = getLoginIcon(pathname);
    const loginButtonText = getLoginButtonText(pathname);

    return (
      <div className="signUpBody">
        <div className="title">
          <h1>{title}</h1>
          <p id="UserIcon">
            <FontAwesomeIcon icon={icon} />
          </p>
        </div>
        <div>
          <form
            className="col-lg-6 offset-lg-3 was-validated"
            onSubmit={this.submitHandler}
          >
            <div className="form-group" id="signUpForm">
              <h1 className="username-Error">{this.state.error}</h1>
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="username"
                value={username}
                onChange={this.changeHandler}
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.changeHandler}
                required
              />
              <div className="valid-feedback">Looks Good!</div>
              <small id="passwordHelpBlock" className="form-text text-muted">
                Your password must be 8-20 characters long, contain letters and
                numbers, and must not contain spaces, special characters.
              </small>
            </div>
            <button type="submit" className="btn btn-primary" id="signup">
              {loginButtonText}
            </button>
          </form>
        </div>
      </div>
    );
  }
}
