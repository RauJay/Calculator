import React from "react";
import "./Button.css";

const button = props => {
  return (
    <button onClick={() => props.click(props.number)}>{props.number}</button>
  );
};

export default button;
