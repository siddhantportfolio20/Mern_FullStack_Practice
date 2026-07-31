import { useState, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Stopwatch</h1>

      <h2>{time} sec</h2>

      <button onClick={handleStart}>Start</button>

      <button onClick={handleStop} style={{ marginLeft: "10px" }}>
        Stop
      </button>

      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;