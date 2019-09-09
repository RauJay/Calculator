import React from "react";
import Button from "../Button/Button";

const cockpit = props => {
  return props.numbers.map((num, index) => {
    return <Button number={num} key={index} click={() => props.clicked(num)} />;
  });
};

export default cockpit;
