import React, { useState, useEffect } from "react";

const MultiEffectComponent = () => {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(1);

  useEffect(() => {
    console.log("Couunt changed", count);
  }, [count]); // side effect lgoic will run everythime when count is changed

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSec) => prevSec + 1);
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); //logic will run only on first render

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <h2>Secconds : {seconds}</h2>
    </div>
  );
};

export default MultiEffectComponent;
