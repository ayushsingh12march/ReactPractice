import React from "react";
import ReactDOM from "react-dom";
import Stateful from "./components/Stateful";
import Stateless from "./components/Stateless";
import Parent from "./components/Parent";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Stateful />
      <Stateless />
      <Parent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
