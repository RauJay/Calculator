import React, { Component } from "react";
import Cockpit from "../Components/Cockpit/Cockpit";
import classes from "./App.css";

class App extends Component {
  state = {
    userInput: 0,
    numbers: [
      1,
      2,
      3,
      <i className="fas fa-divide"></i>,
      4,
      5,
      6,
      <i className="fas fa-times"></i>,
      7,
      8,
      9,
      <i className="fas fa-plus"></i>,
      <i className="fas fa-redo-alt"></i>,
      0,
      <i className="fas fa-equals"></i>,
      <i className="fas fa-minus"></i>
    ]
  };

  computer = (value, operation) => {
    const op = operation[0];
    console.log(op);
    let [a, b] = value.split(op).map(val => Number(val));
    console.log(a, b);
    switch (op) {
      case "x":
        return a * b;
      case "-":
        return a - b;
      case "/":
        return a / b;
      case "+":
        return a + b;
    }
  };

  userInputHandler = number => {
    if (typeof number === "object") {
      console.log(number.props.className.split(" ")[1]);
      // if()
      switch (number.props.className.split(" ")[1]) {
        case "fa-divide":
          number = "/";
          console.log(number);
          break;
        case "fa-times":
          number = "x";
          console.log(number);
          break;
        case "fa-plus":
          number = "+";
          console.log(number);
          break;
        case "fa-minus":
          number = "-";
          console.log(number);
          break;
        case "fa-redo-alt":
          number = "refresh";
          break;
        case "fa-equals":
          number = "=";
          break;
      }
    }
    if (number === "refresh") {
      this.setState({
        userInput: 0
      });
    } else if (number == "=") {
      let value = this.state.userInput;
      console.log(value);
      console.log(value.match(/[-+/x]/g));
      value = this.computer(value, value.match(/[-+/x]/g));
      console.log(value);
      this.setState({
        userInput: value
      });
    } else {
      let userInput = this.state.userInput;
      userInput = userInput + "" + number;
      this.setState({
        userInput: userInput
      });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div className={classes.App}>
          <div className={classes["user-input"]}>{this.state.userInput}</div>
          <Cockpit
            numbers={this.state.numbers}
            clicked={number => this.userInputHandler(number)}
          />
        </div>
      </div>
    );
  }
}

export default App;
