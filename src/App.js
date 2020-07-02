import React from "react";
import image from "../public/assets/image.png";
import { SnapWrapper } from "../src/Snap/SnapWrapper";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SnapWrapper delay={1000} resume="auto">
        <img alt={""} src={image} />
      </SnapWrapper>
    </div>
  );
}

export default App;
