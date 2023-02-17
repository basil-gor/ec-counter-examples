//@ts-nocheck
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

/*
This component uses the useState hook to manage its state, which is the count.
The count is stored in a state variable, and the setCount function is used to update the count.
The component's view is generated using JSX, which is a syntax for writing HTML-like structures in JavaScript.
The component listens for clicks on the "+" and "-" buttons, and updates the count accordingly.
*/
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
