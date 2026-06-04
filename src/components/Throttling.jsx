import React, { useState, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  const lastCallRef = useRef(0);

  function handleClick() {
    const now = Date.now();
    console.log("clicked");

    // allow only once every 1000ms (1 sec)
    if (now - lastCallRef.current > 1000) {
      lastCallRef.current = now;
      setCount((prev) => prev + 1);
    }
  }

  return (
    <div>
      <h2>Throttle Button Example</h2>

      <button onClick={handleClick}>Click Fast </button>

      <p>Count: {count}</p>
    </div>
  );
}

