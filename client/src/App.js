import React, { Component, useState } from "react";
import Grid from '@material-ui/core/Grid';
import "./App.css";
import Navbar from "./components/Navbar"
import Search from "./components/Search"
import SearchInput from "./components/SearchResult"
import AboutUs from "./components/AboutUs"
import Trending from "./components/Trending"
import DumpStuff from "./components/DumpStuff"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import PostFormPage from "./components/PostFormPage"


function App() {
  const [data, setData] = useState([])
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Route exact path="/">
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
         


          <AboutUs />
        </Route>
        <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
        {/* <Route exact path="/login">
          <LoginForm />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route> */}
        <Route exact path="/postform/:id">
          <PostFormPage />
        </Route>
      </div>
    </Router>
  );
}


export default App;
