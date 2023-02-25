import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import setStorage from "./helpers/setStorage";
import getStorage from "./helpers/getStorage";

function App() {
  return (
    <>
      <Login />
      {getStorage?<button onClick={() => setStorage(null)}>Logout</button>:1}
    </>
  );
}

export default App;
