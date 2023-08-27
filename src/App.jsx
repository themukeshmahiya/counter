import { useState } from "react";
import "./App.css";

function App() {
  let [counter, mysetCount] = useState(5);
  function addValue() {
    if (counter < 20) {
      counter = counter + 1;
      mysetCount(counter);
    }
  }

  function removeValue() {
    if (counter > 0) {
      counter = counter - 1;
      mysetCount(counter);
    }
  }
  return (
    <>
      <h1 className="hed"> Starts From Here </h1>
      <h2 className="hed"> counter value : {counter}</h2>
      <button onClick={removeValue} id="dw">value --</button>
      <button onClick={addValue} id="up">value ++</button>
    </>
  );
}

export default App;
