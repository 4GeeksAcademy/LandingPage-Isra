import React from "react";
import PropTypes from "prop-types";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {props.brand}
        </a>
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
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {props.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.link1}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.link2}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {props.link3}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  brand: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
  link1: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
};

export default NavBar;
