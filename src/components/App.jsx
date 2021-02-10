import React from "react";

function App() {
  setInterval(fetch, 1000);
  const [time, getTime] = React.useState(new Date().toLocaleTimeString());

  function fetch() {
    getTime(new Date().toLocaleTimeString());
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={fetch}>Get Time</button>
    </div>
  );
}

export default App;
