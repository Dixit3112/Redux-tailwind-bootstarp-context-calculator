import React, { useEffect, useState } from "react";
import "./calculator.scss";
import { useDispatch, useSelector } from "react-redux";
import { handleText } from "../../redux/reducers/common";
import { store } from "../../redux/reducers/";
import { decremented, incremented } from "../../redux/reducers/auth";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setResult("");
  };

  const handleCalculate = (e) => {
    try {
      const calculation = eval(input);
      setResult(calculation);
      addToHistory(input + " = " + calculation);
      setInput("");
    } catch (error) {
      setResult("Error");
    }
  };

  const addToHistory = (calculation) => {
    setHistory((prevHistory) => {
      if (prevHistory.length === 5) {
        prevHistory.pop();
      }
      return [calculation, ...prevHistory];
    });
  };

  useEffect(() => {}, []);

  // const editedData = useSelector((store) => handleText);

  // const store = useSelector((variable)=>{})
  const counterData = useSelector((store) => store.counter.text);
  const authData = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  console.log("******", dispatch(handleText("Hello Freinds, I am Dixit...")));
  console.log("Counter**", counterData);
  // console.log("auth***", authData);

  return (
    <div className="calculator">
      <div className="bg-green-600 text-white text-center">{counterData}</div>
      <div className="bg-green-600 text-white text-center">{authData.text}</div>
      {/* <div className="bg-green-600">{editedData}</div> */}
      <div className="bg-green-600 text-white text-center">
        <button onClick={() => dispatch(incremented(5))}>Increment</button>
        {authData.value}
        <button onClick={() => dispatch(decremented())}>Decrement</button>
      </div>
      <div className="valIn">
        <input type="text" value={input} readOnly />
        <input
          type="text"
          value={result}
          onChange={(e) => {
            dispatch(handleText(e.target));
          }}
        />
      </div>

      <div className="buttons">
        <div className="row">
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("/")}>/</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("*")}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("-")}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={() => handleInput(".")}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleInput("+")}>+</button>
        </div>
        <div className="row">
          <button onClick={handleClear}>Clr</button>
          <button
            onClick={(e) => {
              dispatch(incremented);
              console.log(e.target.value);
            }}
          >
            Clr
          </button>
        </div>
      </div>
      <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((calculation, index) => (
            <li key={index}>{calculation}</li>
          ))}
        </ul>
        <div className="result">{result}</div>
      </div>
    </div>
  );
}
