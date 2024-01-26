import React, { useState, useEffect } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const { heading, setHeading } = useState("");

  const darkMode = () => {
    props.setDarkMode();
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg  ${
          props.darkmodestatus ? "navbar-dark bg-dark" : "navbar-light bg-light"
        } `}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.name}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

            {/* <div className={`form-color`}>
              <input
                className={`form-color-input
              ${
                props.darkmodestatus
                  ? "btn btn-light mx-2 btn-outline-light"
                  : "btn btn-light mx-2 btn-outline-dark"
              }`}
                type="color"
                onChange={(event) => {
                  let value = event.target.value;
                  props.setColorByInput(value);
                }}
              />
            </div> */}

            <div className="d-flex">
              <div
                className={`form-check form-switch ${
                  props.darkmodestatus ? "text-light" : "text-dark"
                } `}
              >
                <input
                  className={`form-check-input
              ${
                props.darkmodestatus
                  ? "btn btn-light mx-2 btn-outline-light"
                  : "btn btn-light mx-2 btn-outline-dark"
              }`}
                  type="checkbox"
                  // id="flexSwitchCheckDefault"
                  onClick={() => {
                    darkMode();
                  }}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  Dark Mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  name: propTypes.string.isRequired, // => isRequired Means That is required field
};

Navbar.defaultProps = {
  name: "TitleUtils",
};
