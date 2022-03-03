import "./App.css";
import { useState } from "react";

function App() {
  const [offsetTop, setOffsetTop] = useState(300);
  const [counter, setCounter] = useState(0);

  function moveBoxUp() {
    setOffsetTop(offsetTop - 20);
  }

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div className="App">
      <h1>Move this box!</h1>
      <button onClick={moveBoxUp}> 👆 Move up 👆</button>

      <div
        className="box"
        style={{ transform: `translateY(${offsetTop}px)` }}
        /*YOU COULD USE THIS FUNCTION METHOD FOR THE INLINE STYLE
        const boxStyle = {
          transform: `translateY(${offsetTop}px)`
        }
        style={boxStyle}
        */
      />

      <button onClick={increment}>+</button>
      <div>{counter}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
