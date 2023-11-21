import React from "react";
import ReactDOM from "react-dom";
import { Heading } from "./components/Header";
import { Body } from "./components/Body";

const App = () => {
  return (
    <div cassName="app">
      <Heading />
      <Body />
    </div>
  );
};

const rendering = ReactDOM.createRoot(document.getElementById("root"));
rendering.render(<App />);
