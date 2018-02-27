import React, { Component } from "react";
import Navbar from "./Navbar";
import SignUp from "./SignUp";
const fetch = require("node-fetch");
const server = require("../server");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SignUp />
      </div>
    );
  }
}

export default App;
