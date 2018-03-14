import React, { Component } from "react";
const fetch = require("node-fetch");
const server = require("../server");

class SignUp extends Component {
  onSubmit(e) {
    e.preventDefault();
    let body = { email: e.target.email.value };
    const options = {
      method: "POST",
      credentials: "same-origin",
      body: JSON.stringify(body),
      headers: { "content-type": "application/json" }
    };
    console.log(options.body);
    console.log(server);
    fetch(`${server}/signup`, options);
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default SignUp;
