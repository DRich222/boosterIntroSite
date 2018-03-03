import React, { Component } from "react";

import Page from "./Page";
const fetch = require("node-fetch");
const server = require("../server");

class App extends Component {
  render() {
    return (
      <div className="App">
          <Page />
      </div>
    );
  }
}

export default App;
