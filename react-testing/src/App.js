import { useState } from "react";

function App() {
  let [message, setMessage] = useState("welcome");
  let [power, setPower] = useState(0);

  const increasePower = () => {
    setPower(power + 1);
  };

  return <div>
    <h1>Message: {message}</h1>
    <h1>Power: {power}</h1>
    <button onClick={increasePower}>Increase Power</button>
  </div>;
}

export default App;