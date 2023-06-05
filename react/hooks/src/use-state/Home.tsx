// Based on https://react.dev/reference/react/useState

import { useState } from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // setCount doesn't change the current state until the next render cycle.
    console.log(`before setCount: ${count}`);
    setCount(count + 1);
    console.log(`after setCount: ${count}`);
  }

  function handleClickUsingArrow() {
    // We can also pass an arrow function to setCount. The state variable count is
    // passed as n to the arrow function.
    setCount((n) => {
      return n + 1;
    });
  }

  return (
    <div>
      <h1>useState</h1>
      <div>
        <a href="/">Return to home</a>
        <p>
          <strong>Format: </strong><code>const [state, setState] = useState(initialState);</code>
        </p>
        <p>
          <strong>Counter: </strong>{count}
        </p>
        <p>
          <button onClick={handleClick}>Add</button>
        </p>
        <p>
          <button onClick={handleClickUsingArrow}>Add using arrow function</button>
        </p>
      </div>
    </div>
  );
}
