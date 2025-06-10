import { useState, useEffect } from "react";

export default function App() {
  let [num, setNum] = useState(Number);

  useEffect(() => {
    add();
    console.log("i am use");
  }, []);

  function add() {
    console.log("i am add function");
    num = num + 1;
    setNum(num);
  }

  return (
    <>
      <h1>i am saikiran</h1>
      <button onClick={add}>click-me</button>
      <h1>{num}</h1>
    </>
  );
}
