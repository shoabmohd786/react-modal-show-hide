import "./App.css";
import { useState } from "react";

function App() {
  let [show, setShow] = useState(false);

  return (
    <div className="App">
      <button className="btn" onClick={() => setShow(!show)}> show Modal </button>
      <div className="main"></div>
      <div className={`modal ${show ? "active" : ""}`}>
        <span className="en">Enquiry Now</span>
        <span className="close" onClick={() => setShow(!show)}>
          &times;
        </span>
        <div></div>
      </div>
    </div>
  );
}

export default App;
