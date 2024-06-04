import { useState } from "react";
import logo from "./images/logo.svg";
import "./index.css";
import TipCalculator from "./TipCalculator";
function App() {
  return (
    <main>
      <img src={logo} alt="SPLITTER Logo" className="splitter_logo" />
      <TipCalculator />
    </main>
  );
}

export default App;
