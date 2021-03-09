import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import "./App.css";
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import SearchInput from "./components/SearchResult"
import AboutUs from "./components/AboutUs"
import Trending from "./components/Trending"
import DumpStuff from "./components/DumpStuff"
import SignUp from "./components/Forms/SignUp"
import LoginForm from "./components/Forms/LoginForm"


function App() {
  const [data, setData] = useState([])
  return (
    <Router>
      <div className="App">
        <Navbar />


        <Search setData={setData} />

        <SearchInput setData={setData} data={data} />

        <Grid container>
          <Grid item xs={4}>
            <Trending title="Top Trending" />
          </Grid>
          <Grid item xs={4}>
            <Trending title="Second in line" />
          </Grid>
          <Grid item xs={4}>
            <Trending title="Third from the top" />
          </Grid>
        </Grid>
        <br />
        <br />
        <DumpStuff />

        <SignUp />


        <AboutUs />

      </div>
    </Router>
  );
}


export default App;
