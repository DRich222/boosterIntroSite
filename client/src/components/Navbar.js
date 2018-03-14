import React from "react";
import server from "../server";

//Sign Up function that makes a POST request to the server
const signUp = e => {
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
    e.target.reset();
};

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Booster
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="my-2 my-lg-0 ml-auto">
                <form className="form-inline" onSubmit={signUp}>
                    <input
                        className="form-control mr-sm-2"
                        placeholder="Email"
                        aria-label="Email"
                        name="email"
                    />
                    <button
                        className="btn btn-outline-success my-2 my-sm-0"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
                <div style={{ textAlign: "right" }}>
                    Yes! We deal with these challenges!
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
