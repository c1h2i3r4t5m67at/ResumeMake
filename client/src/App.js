import React from "react";
import "./App.css";
import Login from "./components/Login";
import setStorage from "./helpers/setStorage";
import getStorage from "./helpers/getStorage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>

      <Route path="/" element={<Login />} />
      {/* {getStorage?<button onClick={() => setStorage(null)}>Logout</button>:1} */}
      </Routes>

    </>
  );
}

export default App;
