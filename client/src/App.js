import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
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
      <Grid container>
        <Grid item xs={4}>
        <Trending title = "Top Trending"/>
        </Grid>
        <Grid item xs={4}>
        <Trending title = "Second in line" />
        </Grid>
        <Grid item xs={4}>
        <Trending title = "Third from the top" />
        </Grid>
       </Grid> 
        {/* <Search /> */}
        <DumpStuff />

      <SignUp />   


       <AboutUs />
    
    </div>
    </Router>
  );
}


export default App;
