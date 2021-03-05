import React, { Component } from "react";
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
    <div className="App">
      <Navbar />

      <Search />

      {/* <SearchResult /> */}

      <Trending />

      <DumpStuff />

      <AboutUs />

      <SignUp />   
    
    </div>
    
  );
}


export default App;
