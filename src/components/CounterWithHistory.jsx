import { useState } from "react";

function CounterWithHistory() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  function increment() {
    setHistory((prev) => [...prev, count]);
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setHistory((prev) => [...prev, count]);
    setCount((prev) => prev - 1);
  }

  function reset() {
    setHistory((prev) => [...prev, count]);
    setCount(0);
  }

  function undo() {
    console.log(history.length);
    if (history.length === 0) return;

    const previousValue = history[history.length - 1];

    setCount(previousValue);
    setHistory((prev) => prev.slice(0, -1));
  }

  return (
    <div>
      <h2>Counter with History</h2>

      <h1>Count: {count}</h1>

      <button style={{ marginLeft: "5px" }} onClick={increment}>
        +
      </button>

      <button style={{ marginLeft: "5px" }} onClick={decrement}>
        -
      </button>

      <button style={{ marginLeft: "5px" }} onClick={reset}>
        Reset
      </button>

      <button
        style={{ marginLeft: "5px" }}
        onClick={undo}
        disabled={history.length === 0}
      >
        Undo
      </button>

      <h3>History:</h3>

      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default CounterWithHistory;
