import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // Updator functions adds all the changes to a queue, keeping the new state rather than retaining the old state until the next update cycle
  function increment() {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  }

  function decrement() {
    for (let i = 0; i < 3; i++) {
      setCount((c) => c - 1);
    }
  }
  // In cases where we will not need the previous state, we can not use one entirely and just send back what we want it to be
  function reset() {
    setCount(0);
  }

  return (
    <>
      <h1>{count}</h1>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}

export default Counter;
