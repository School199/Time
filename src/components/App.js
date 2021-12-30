import React, { useState } from "react";

function App() {
  const [text, time] = useState("TIME");

  function click() {
    time(new Date().toLocaleTimeString("en-GB"));
    setInterval(click, 1000);
  }

  return (
    <div className="container">
      <p>{text}</p>
      <button onClick={click}>Get Time</button>
    </div>
  );
}

export default App;
