import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Search from "./components/Search"
// import SearchResult from "./components/SearchResult"
import AboutUs from "./components/AboutUs"
import Trending from "./components/Trending"
import DumpStuff from "./components/DumpStuff"
import SignUp from "./components/Forms/SignUp"
// import LoginForm from "./components/Forms/LoginForm"


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

        {/* <SearchResult /> */}

        <Trending />
        {/* <Search /> */}
        <DumpStuff />


        <AboutUs />

        <SignUp />

<<<<<<< HEAD
      </div>
    </Router>
=======
      <SignUp />   
    
    </div>
    </ Router>
>>>>>>> 5e757db74fbd1d17d1138b3943cca5415c566c27
  );
}


export default App;
