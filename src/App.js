import React, { Component } from "react";
import { Header } from "./components/Header/Header";
import { ContactPage } from "./components/Pages/ContactPage/ContactPage";
import { HomePage } from "./components/Pages/HomePage/HomePage";
import { Genres } from "./components/Pages/Genres/Genres";
import { AllMovies } from "./components/Pages/AllMovies/AllMovies";
import { AdvancedSearch } from "./components/Pages/AdvancedSearch/AdvancedSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
        </div>
      </Router>
    );
  }
}

export default App;
