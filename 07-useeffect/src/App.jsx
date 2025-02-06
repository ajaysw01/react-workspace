import { useEffect, useState } from "react";
import "./App.css";
import LoggerComponent from "./components/LoggerComponent";
import TimerComponent from "./components/TimerComponent";
import DataFetcher from "./components/DataFetcher";
import ResizeComponent from "./components/ResizeComponent";
import MultiEffectComponent from "./components/MultiEffectComponent";

function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  // useEffect :
  // first - side effect function - what action we want to perform
  //second - clean up function - memeory leaks
  //third - comma separated dependence list

  // variation 1
  // runs on every render
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  // var 2 :
  // runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render");
  // }, []);

  // var 3 :
  // single depenecy
  // useEffect(() => {
  //   alert("I will run every time when count is updated ");
  // }, [count]);

  // var 4 :
  // multiple dependecnies
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count, total]);

  // var 5 :
  // with clean up funciton
  // useEffect(() => {
  //   alert("count is updated");

  //   return () => {
  //     alert("count is unmounted");
  //   };
  // }, [count]);

  // function handleClick() {
  //   setCount(count + 1);
  // }

  // function handleClickTotal() {
  //   setTotal(total + 1);
  // }

  return (
    <>
      <MultiEffectComponent />
      <ResizeComponent />
      {/* <DataFetcher /> */}
      {/* <TimerComponent /> */}
      {/* <LoggerComponent /> */}
      {/* <div>
        <button onClick={handleClick}>Update count</button> <br />
        <p>Count is {count}</p>
      </div>
      <br />
      <div>
        <button onClick={handleClickTotal}>Update Total</button> <br />
        <p>Total is {total}</p>
      </div> */}
    </>
  );
}

export default App;
