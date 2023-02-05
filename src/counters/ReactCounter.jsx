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

  return (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default Counter;
