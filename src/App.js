import React from "react";
import "./App.css";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <div className="card">
      <h1>COUNTER</h1>
      <div className="count">
          <div className="count-value">{count}</div>
        </div>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Decrease
        </button>
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
