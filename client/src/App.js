import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"
import Search from "./components/Search"
// import SearchResult from "./components/SearchResult"
import AboutUs from "./components/AboutUs"
import Trending from "./components/Trending"
import DumpStuff from "./components/DumpStuff"
// import unsplash from "./Api";
// import { toJson } from "unsplash-js";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/Login" component={""} />
      <Route exact path="/Signup" component={""} />
      <Route exact path="/User" component={""} />
      <Route exact path="/DumpStuff" component={""} /> */}
      <Search />

      {/* <SearchResult /> */}

      <Trending />

      <DumpStuff />

      <AboutUs />
    
    </div>
    </Router>
  );
}


export default App;
