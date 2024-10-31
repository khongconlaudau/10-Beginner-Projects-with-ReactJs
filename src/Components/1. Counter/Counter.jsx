import { useState } from "react";
import "./CounterStyle.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <div className="Number">
        <h1>{count}</h1>
      </div>

      <div className="btns-container">
        <button className="increment" onClick={increment}>
          +
        </button>
        <button className="decrement" onClick={decrement}>
          -
        </button>
      </div>
    </div>
  );
};
export default Counter;
