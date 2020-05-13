import React, { Component } from "react";

export class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
}
fetch("https://movies-api-siit.herokuapp.com/auth/login", {
  method: "POST",
  path: "/movies",
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
    "X-Auth-Token": token,
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
  body: JSON.stringify({
    username: "stefan_cel_mare",
    password: "1234",
  }),
})
  .then((response) => response.json())
  .then((json) => {
    console.log(json);

    document.cookie = `token=${json.accessToken}`;
  });
