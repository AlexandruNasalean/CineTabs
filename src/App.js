import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import { ContactPage } from "./components/Pages/ContactPage/ContactPage";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import { Genres } from "./components/Pages/Genres/Genres";
import { AllMovies } from "./components/Pages/AllMovies/AllMovies";
import { AdvancedSearch } from "./components/Pages/AdvancedSearch/AdvancedSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { LoginButton } from "./components/Header/components/LoginButton";
import { LogOutButton } from "./components/Header/components/LogOutButton";
import { Footer } from "./components/Footer/Footer";
import { ErrorBoundary } from "./components/ErrorHandling/ErrorHandling";
import {SignUp} from "./components/Pages/Sign-up/Sign-up"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/AllMovies" component={AllMovies} />
          <Route exact path="/Genres" component={Genres} />
          <Route exact path="/AdvancedSearch" component={AdvancedSearch} />
      <ErrorBoundary><Route exact path="/Sign-Up" component = {SignUp} /></ErrorBoundary>
      <Route exact path="/ContactPage" component = {ContactPage} />
          <Route
            exact
            path="/components/Header/components"
            component={LoginButton}
          />
          <Route exact path="/Contact" component={ContactPage} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
