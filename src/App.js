import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import { ContactPage } from "./components/Pages/ContactPage/ContactPage";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import { Genres } from "./components/Pages/Genres/Genres";
import { AllMovies } from "./components/Pages/AllMovies/AllMovies";
import { AdvancedSearch } from "./components/Pages/AdvancedSearch/AdvancedSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Pages/Login/Login";
import { MoviePage } from "./components/Pages/MoviePage/MoviePage";
import { LogOffModal } from "./components/Pages/LogOut/LogOutModal";
import { AddMovie } from "./components/Pages/AddMovie/AddMovie";
import { EditMovie } from "./components/Pages/EditMovie/EditMovie";
import { HomePageResults } from "./components/Pages/PageComponents/HomePageSearchResultPage";
import Cookies from "js-cookie";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    username: null,
    token: null,
    showLogOutModal: false,
  };

  componentDidMount() {
    const token = Cookies.get("token");
    if (token) {
      this.setState({
        isLoggedIn: true,
        token,
        username: Cookies.get("username"),
      });
    }
  }

  handleLogin = (username, token) => {
    this.setState({
      isLoggedIn: true,
      username,
      token,
    });
  };

  handleLogOut = () => {
    const token = Cookies.get("token");

    fetch("https://movies-app-siit.herokuapp.com/auth/logout", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": token,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        this.setState({
          isLoggedIn: false,
          username: null,
          token: null,
          showLogOutModal: false,
        });
        Cookies.remove("token", {
          path: "",
        });
        Cookies.remove("username", {
          path: "",
        });
      });
    console.log(this.state.isLoggedIn);
  };

  handleLogOutShowModal = () => {
    this.setState({
      showLogOutModal: true,
    });
  };

  handleHideLogOutModal = () => {
    this.setState({
      showLogOutModal: false,
    });
  };

  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <div className="app">
              <Header
                isLoggedIn={isLoggedIn}
                username={username}
                onShowLogOutModal={this.handleLogOutShowModal}
              />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/AllMovies" component={AllMovies} />
              <Route exact path="/Genres" component={Genres} />
              <Route exact path="/AdvancedSearch" component={AdvancedSearch} />
              <Route exact path="/HomePageSearchResults" component={HomePageResults}/>
              <Route exact path="/addmovie" component={AddMovie} />
              <Route exact path="/editmovie" component={EditMovie} />
              <Route
                exact
                path="/MoviePage"
                component={(props) => (
                  <MoviePage {...props} isLoggedIn={isLoggedIn} />
                )}
              />
              <Route exact path="/Contact" component={ContactPage} />
              <Route
                exact
                path="/login"
                component={(props) => (
                  <Login {...props} onLogin={this.handleLogin} />
                )}
              />
              <Route
                exact
                path="/sign-up"
                component={(props) => (
                  <Login {...props} onLogin={this.handleLogin} />
                )}
                onLogin={this.handleLogin}
              />
              <Footer />
              <LogOffModal
                show={this.state.showLogOutModal}
                hideModal={this.handleHideLogOutModal}
                removeCookies={this.handleLogOut}
              />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
