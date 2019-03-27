import React, { Component } from "react";
import "./nav.css";

class Nav extends Component {
  // state = {
  //   count: 0
  // };

  render() {
    return (
      <div className="outer">
        <div className="text-right ls">
          <a className="btn btn-primary margin-left" href="/login">
            LogIn
          </a>
          <a href="/signup">SignUp</a>
        </div>
      </div>
    );
  }

  // formatCount() {
  //   const { count } = this.state;
  //   return count === 0 ? <h1>Zero</h1> : count;
  // }
}

export default Nav;
