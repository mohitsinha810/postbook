import React, { Component } from "react";
import Nav from "./Nav/nav";
import Body from "./Nav/body";

class Main extends Component {
  render() {
    return [
      <div>
        {/* <h1>Welcome</h1> */}
        <li key="one">
          <Nav />
        </li>
        <li key="two">
          <Body />
        </li>
      </div>
    ];
  }
}

export default Main;
