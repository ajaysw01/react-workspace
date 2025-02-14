import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/counterSlice";
import { useState } from "react";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }

  function hnadleIncAmountClick() {
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>Count:{count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <br /> <br />
        <button onClick={handleResetClick}>Reset</button>
        <br />
        <input
          type="text"
          value={amount}
          placeholder="Enter amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <button onClick={hnadleIncAmountClick}>Inc By Amount</button>
      </div>
    </>
  );
}

export default App;
