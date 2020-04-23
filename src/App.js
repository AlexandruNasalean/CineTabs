import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import { ContactPage } from "./components/Pages/ContactPage/ContactPage";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import { Genres } from "./components/Pages/Genres/Genres";
import { AllMovies } from "./components/Pages/AllMovies/AllMovies";
import { AdvancedSearch } from "./components/Pages/AdvancedSearch/AdvancedSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginButton } from "./components/Header/components/LoginButton";
import { Footer } from "./components/Footer/Footer";
import { ErrorBoundary } from "./components/ErrorHandling/ErrorHandling";
import { SignUp } from "./components/Pages/Sign-up/Sign-up";
import { MoviePage } from "./components/Pages/MoviePage/MoviePage";
import "./App.css";

class App extends Component {
  state = {
    isLoggedIn: false,
    userName: "",
  };

  componentDidMount() {
    // TODO: getFromCookie token and username  then setState
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/AllMovies" component={AllMovies} />
          <Route exact path="/Genres" component={Genres} />
          <Route exact path="/AdvancedSearch" component={AdvancedSearch} />
          <Route exact path="/MoviePage" component={MoviePage} />
          <Route exact path="/Contact" component={ContactPage} />
          <ErrorBoundary>
            <Route exact path="/Sign-Up" component={SignUp} />
          </ErrorBoundary>
          <Route
            exact
            path="/components/Header/components"
            component={LoginButton}
          />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
