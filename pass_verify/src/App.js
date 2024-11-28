// src/App.js
import React from "react";
import PasswordInput from "./components/PasswordInput";
import "./styles/global.css";

const App = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f9", minHeight: "100vh" }}>
      <PasswordInput />
    </div>
  );
};

export default App;
