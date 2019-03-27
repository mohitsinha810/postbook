import React, { Component } from "react";

class SignupForm extends Component {
  render() {
    return (
      <div>
        <form>
          Name:
          <input type="text" name="name" required />
          <br />
          E-mail:
          <input type="email" name="email" required />
          <br />
          Password:
          <input type="password" name="password" required />
          <br />
        </form>
      </div>
    );
  }
}

export default SignupForm;
