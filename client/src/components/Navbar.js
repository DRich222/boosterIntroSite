import React from "react";

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
          <div
              className="my-2 my-lg-0 ml-auto"
          >
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    placeholder="Email"
                    aria-label="Email"
                />
                <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                >
                    Submit
                </button>
            </form>
              <div style={{textAlign: "right"}}>Notify me when Booster is live</div>
          </div>
        </nav>
    );
};

export default Navbar;
