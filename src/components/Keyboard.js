import "../App.css";
const Keyboard = ({
  handleNumberChange,
  handleOperatorChange,
  handleReset,
  handleBackspace,
  handleEqual,
  handlePercentage,
}) => {
  return (
    <div className="buttons_wrapper">
      <button id="ac_btn" onClick={() => handleReset()}>
        AC
      </button>
      <button onClick={() => handleBackspace()}>&larr;</button>
      <button id="percent_btn" onClick={() => handlePercentage()}>
        %
      </button>
      <button id="division_btn" onClick={() => handleOperatorChange(" / ")}>
        /
      </button>
      <button onClick={() => handleNumberChange(7)}>7</button>
      <button onClick={() => handleNumberChange(8)}>8</button>
      <button onClick={() => handleNumberChange(9)}>9</button>
      <button id="multiply_btn" onClick={() => handleOperatorChange(" * ")}>
        *
      </button>
      <button onClick={() => handleNumberChange(4)}>4</button>
      <button onClick={() => handleNumberChange(5)}>5</button>
      <button onClick={() => handleNumberChange(6)}>6</button>
      <button id="minus_btn" onClick={() => handleOperatorChange(" - ")}>
        -
      </button>
      <button onClick={() => handleNumberChange(1)}>1</button>
      <button onClick={() => handleNumberChange(2)}>2</button>
      <button onClick={() => handleNumberChange(3)}>3</button>
      <button id="add_btn" onClick={() => handleOperatorChange(" + ")}>
        +
      </button>
      <button id="point_btn" onClick={() => handleNumberChange(".")}>
        .
      </button>
      <button onClick={() => handleNumberChange(0)}>0</button>
      <button id="equal_btn" onClick={() => handleEqual()}>
        =
      </button>
    </div>
  );
};

export default Keyboard;
