import React, { Component, useState } from "react";
import "../App.css";
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "../Pages/Dashboard"
import Signup from "../Pages/Signup"
import Login from "../Pages/Login"
import PrivateRoute from "../Pages/PrivateRoute"
import ForgotPassword from "../Pages/ForgotPassword"
import UpdateProfile from "../Pages/UpdateProfile"
import PostFormPage from "../Pages/PostFormPage"
import UpdatePostForm from '../Pages/UpdatePostForm'
import Main from "../Pages/Main"
import Navbar from "./Navbar"


function App() {
  const [data, setData] = useState([])
  return (
    <Router>
      <AuthProvider>

        <div className="App">
          <Navbar />
          <Route exact path="/" component={Main} />

          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
          </Switch>

          <Route exact path="/postform/:id"
            component={PostFormPage} />
          <Route exact path="/update/:id"
            component={UpdatePostForm} />

        </div>
      </AuthProvider>

    </Router>









    //     </Route>
    //       <AuthProvider>
    // //       </AuthProvider>

    //     <Route exact path= "/Signup">
    //     <Container
    //   className="d-flex align-items-center justify-content-center"
    //   style={{ minHeight: "100vh" }}
    //   >
    //   <div className="w-100" style={{ maxWidth: "400px" }}>
    //      
    //      </div>
    // </Container>
    // </Route>

    //     </div>
  );
}


export default App;
