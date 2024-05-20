import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div className="card" style={{ width: 18 + "rem" }}>
      <img src={props.imgUrl} className="card-img-top" alt="Image Card" />
      <div className="card-body">
        <h5 className="card-title"> {props.title} </h5>
        <p className="card-text">{props.textoContent}</p>
      </div>
      <div className="card-footer d-flex justify-content-center">
        <a href="#" className="btn btn-primary">
          {props.buttonText}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  textoContent: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};
export default Card;
