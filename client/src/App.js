import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar"
import Search from "./components/Search"
// import SearchResult from "./components/SearchResult"
import AboutUs from "./components/AboutUs"
import Trending from "./components/Trending"
import DumpStuff from "./components/DumpStuff"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Search />

      {/* <SearchResult /> */}

      <Trending />

      <DumpStuff />

      <AboutUs />
    
    </div>
  );
}


export default App;
