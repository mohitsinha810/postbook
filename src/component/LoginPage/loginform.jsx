import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form>
          UserName:
          <input type="text" name="username" value="" required />
          <br />
          Password:
          <input type="password" name="password" value="" required />
          <br />
        </form>
      </div>
    );
  }
}

export default LoginForm;
