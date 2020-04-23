import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import "./SignUp.css";

export class SignUp extends Component {
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
    fetch("http://movies-api-siit.herokuapp.com/auth/register", {
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
        console.log(json.message);
        document.cookie = `token=${json.accessToken}`;
        //TODO: add user name in cookie

        this.setState({
          error: json.message,
        });
      });
  };
  render() {
    const { username, password } = this.state;

    return (
      <div className="signUpBody">
        <div className="title">
          <h1>CREATE ACCOUNT</h1>
          <p id="UserIcon">
            <FontAwesomeIcon icon={faUserPlus} />
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
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}
