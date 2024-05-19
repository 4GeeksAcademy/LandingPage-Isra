import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer className="bg-dark text-white text-center py-2">
      <div className="container">
        <p className="my-1">&copy; 2024 {props.brand}. All rights reserved.</p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  brand: PropTypes.string.isRequired,
};

export default Footer;
