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
    // remove from cookies
    this.setState({
      isLoggedIn: false,
      username: null,
      token: null,
    });
  };

  handleLogOutShowModal =() =>{
    this.setState({
      showLogOutModal: true,
    })
    
  }
  handleHideLogOutModal =() =>{
    this.setState({
      showLogOutModal:false,
    })
  }
  render() {
    const { isLoggedIn, username } = this.state;

    return (
      <Router>
        <div className="app">
          <Header isLoggedIn={isLoggedIn} username={username} onShowLogOutModal={this.handleLogOutShowModal}/>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/AllMovies" component={AllMovies} />
          <Route exact path="/Genres" component={Genres} />
          <Route exact path="/AdvancedSearch" component={AdvancedSearch} />
          <Route 
          exact 
          path="/MoviePage" 
          component={(props) =>(
            <MoviePage {...props} isLoggedIn={isLoggedIn}/>
          )} />
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
          <LogOffModal show={this.state.showLogOutModal} hideModal={this.handleHideLogOutModal} />
        </div>
      </Router>
    );
  }
}

export default App;
