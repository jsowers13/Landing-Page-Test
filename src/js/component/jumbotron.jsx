import React from "react";
import PropTypes from "prop-types";

export const Jumbotron = (props) => {
  return (
    <div className="jumbotron m-5">
      <h1 className="display-4">{props.title}</h1>
      <p className="lead">{props.description}</p>
      <a href={props.buttonUrl} className="btn btn-primary btn-lg">
        {props.buttonLabel}
      </a>
    </div>
  );
};

Jumbotron.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  buttonUrl: PropTypes.string,
  buttonLabel: PropTypes.string,
};
