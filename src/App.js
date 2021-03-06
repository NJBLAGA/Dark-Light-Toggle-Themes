import React, { useState } from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}

export default App;
