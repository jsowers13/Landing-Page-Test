import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
  return (
    <div className="card m-3" style={{ width: 18 + "rem" }}>
      <img src={props.imageUrl} className="card-img-top" alt="..." />
      <div className="card-body text-center">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.buttonUrl} className="btn btn-primary">
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  text: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
};
