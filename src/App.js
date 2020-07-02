import React from "react";
import image from "./assets/image.png";
import { SnapWrapper } from "../src/Snap/index";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SnapWrapper delay={2000} resume="auto">
        <img alt={""} src={image} />
      </SnapWrapper>
    </div>
  );
}

export default App;
