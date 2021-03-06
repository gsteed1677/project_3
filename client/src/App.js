import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
        <Search setData={setData}/>

        <SearchInput setData = {setData} data={data}/>

        <Trending />
       
        <DumpStuff />

        <AboutUs />
        <Switch>
        <Route exact path="/Login" component={LoginForm} />
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Route exact path="/Signup" component={SignUp} /> */}
        {/* <Route exact path="/User" component={""} />
        <Route exact path="/DumpStuff" component={""} /> */}
        </Switch>  
    
    </div>
    </Router>
  );
}


export default App;
