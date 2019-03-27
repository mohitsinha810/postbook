import React, { Component } from "react";
import SignupForm from "./signupform";
import "./signuppage.css";

class SignupPage extends Component {
  render() {
    return (
      <div className="SignupPage">
        <SignupForm />
      </div>
    );
  }
}

export default SignupPage;
