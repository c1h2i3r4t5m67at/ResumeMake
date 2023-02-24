import React from "react";
import "./App.css";
import axios from "axios";
import Login from "./components/Login";

function App() {
  const foo = () => {
    axios
      .get("http://localhost:5133/api/NewResumes")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
