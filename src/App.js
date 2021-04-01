import React, { Component } from "react";
import "./App.css";
import Result from "./components/Result";
import Keyboard from "./components/Keyboard";

export default class App extends Component {
  state = {
    enteredNumber: "0",
    firstNumber: "",
    operator: "",
    resultNumber: "",
    percentage: false,
  };
  handleNumberChange = (e) => {
    const { operator, firstNumber, enteredNumber } = this.state;
    if (enteredNumber[0] === "0") {
      this.setState((state) => ({
        enteredNumber: state.enteredNumber.concat(e).slice(1),
      }));
    } else {
      this.setState((state) => ({
        enteredNumber: state.enteredNumber.toString().concat(e),
        resultNumber: state.enteredNumber.toString().concat(e),
      }));
    }
    if (firstNumber) {
      switch (operator) {
        case " + ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) + Number(state.enteredNumber),
            }));
          }
          break;
        case " - ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) - Number(state.enteredNumber),
            }));
          }
          break;
        case " * ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) * Number(state.enteredNumber),
            }));
          }
          break;
        case " / ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) / Number(state.enteredNumber),
            }));
          }
          break;
      }
    }
  };

  handleOperatorChange = (e) => {
    const { enteredNumber, resultNumber } = this.state;

    if (enteredNumber === "0") {
      this.setState(() => ({
        firstNumber: 0,
      }));
    }
    if (!enteredNumber) {
      this.setState((state) => ({
        operator: e,
        enteredNumber: state.firstNumber,
      }));
    }
    if (resultNumber) {
      this.setState((state) => ({
        enteredNumber: state.resultNumber,
      }));
    }
    this.setState((state) => ({
      operator: e,
      firstNumber: state.enteredNumber,
      enteredNumber: "",
    }));
  };

  handleReset = () => {
    this.setState(() => ({
      enteredNumber: "0",
      firstNumber: "",
      operator: "",
      resultNumber: "",
      percentage: false,
    }));
  };
  handleBackspace = () => {
    const { enteredNumber, firstNumber, operator } = this.state;
    this.setState(() => ({
      enteredNumber: enteredNumber.toString().slice(0, -1),
      resultNumber: enteredNumber.toString().slice(0, -1),
    }));

    if (firstNumber) {
      switch (operator) {
        case " + ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) + Number(state.enteredNumber),
            }));
          }
          break;
        case " - ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) - Number(state.enteredNumber),
            }));
          }
          break;
        case " * ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) * Number(state.enteredNumber),
            }));
          }
          break;
        case " / ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) / Number(state.enteredNumber),
            }));
          }
          break;
      }
    }
  };
  handleEqual = () => {
    if (!this.state.firstNumber) {
      return;
    }
    this.setState((state) => ({
      enteredNumber: state.resultNumber,
      operator: "",
      firstNumber: "",
      percentage: false,
    }));
  };
  handlePercentage = () => {
    const { operator, enteredNumber } = this.state;
    if (operator && enteredNumber) {
      this.setState(() => ({
        percentage: true,
      }));
      switch (operator) {
        case " + ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) +
                (Number(state.firstNumber) * Number(state.enteredNumber)) / 100,
            }));
          }
          break;
        case " - ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) -
                (Number(state.firstNumber) * Number(state.enteredNumber)) / 100,
            }));
          }
          break;
        case " * ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) *
                ((Number(state.firstNumber) * Number(state.enteredNumber)) /
                  100),
            }));
          }
          break;
        case " / ":
          {
            this.setState((state) => ({
              resultNumber:
                Number(state.firstNumber) /
                ((Number(state.firstNumber) * Number(state.enteredNumber)) /
                  100),
            }));
          }
          break;
      }
    }
  };
  //keyboard control implementation
  keyboardCyfral = (e) => {
    if (
      e.key === "1" ||
      e.key === "2" ||
      e.key === "3" ||
      e.key === "4" ||
      e.key === "5" ||
      e.key === "6" ||
      e.key === "7" ||
      e.key === "8" ||
      e.key === "9" ||
      e.key === "0" ||
      e.key === "."
    ) {
      this.handleNumberChange(e.key);
    }
    if (e.key === "*" || e.key === "/" || e.key === "+" || e.key === "-") {
      this.handleOperatorChange(` ${e.key} `);
    }
    if (e.key === "Backspace") {
      this.handleBackspace();
    }
    if (e.key === "Enter") {
      this.handleEqual();
    }
    if (e.key === "%") {
      this.handlePercentage();
    }
    if (e.key === "%") {
      this.handlePercentage();
    }
  };
  componentDidMount() {
    window.addEventListener("keydown", (e) => this.keyboardCyfral(e));
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", (e) => this.keyboardCyfral(e));
  }
  componentDidUpdate() {
    if (this.state.enteredNumber === "" && this.state.firstNumber === "") {
      this.setState(() => ({
        enteredNumber: "0",
      }));
    }
  }
  render() {
    const {
      firstNumber,
      resultNumber,
      operator,
      enteredNumber,
      percentage,
    } = this.state;

    return (
      <>
        <div className="wrapper_main">
          <Result
            log={
              firstNumber +
              operator +
              enteredNumber +
              `${operator && percentage ? "%" : ""}`
            }
            resultNumber={resultNumber ? resultNumber : 0}
          />
          <Keyboard
            handleNumberChange={this.handleNumberChange}
            handleOperatorChange={this.handleOperatorChange}
            handleReset={this.handleReset}
            handleBackspace={this.handleBackspace}
            handleEqual={this.handleEqual}
            handlePercentage={this.handlePercentage}
          />
        </div>
      </>
    );
  }
}
