import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import TestinComponent from "./TestinComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <TestinComponent />
    </div>
  );
}

export default App;
