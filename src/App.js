import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./component/main";
import LoginPage from "./component/LoginPage/loginpage";
import SignupPage from "./component/SignupPage/signuppage";
import "./App.css";

const Home = () => <Main />;

const Login = () => <LoginPage />;

const Signup = () => <SignupPage />;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <h1>Welcome</h1> */}

          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </div>
      </Router>
    );
  }
}

export default App;
