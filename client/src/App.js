import React from "react";
import "./App.css";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import NewResume from "./components/NewResume";
import ViewResume from "./components/ViewResume";

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainPage />} />   
        <Route path="/newResume" element={<NewResume />} />   
        <Route path="/viewresume" element={<ViewResume />} />   
      </Routes>
    </>
  );
}

export default App;
