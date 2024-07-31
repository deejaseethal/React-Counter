import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleClick1 = () => {
    setCount(count + 1);
  };

  const handleClick2 = () => {
    setCount(count - 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "300%",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "-15%",
      }}
    >
      Counter App
      <div
        style={{
          fontSize: "120%",
          position: "relative",
          top: "10vh",
        }}
      >
        {count}
      </div>
      <div className="buttons">
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginRight: "5px",
            backgroundColor: "green",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClick1}
        >
          Increment
        </button>
        <button
          style={{
            fontSize: "60%",
            position: "relative",
            top: "20vh",
            marginLeft: "5px",
            backgroundColor: "red",
            borderRadius: "8%",
            color: "white",
          }}
          onClick={handleClick2}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
