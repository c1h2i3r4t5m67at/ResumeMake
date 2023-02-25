import React from "react";
import { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import {login} from "../helpers/login.js"

function Login() {
  const [val, setVal] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  return (
    <>
      Login or Register
      <form noValidate autoComplete="off" onSubmit={(e) => {
        login(val, pass, e)
        navigate("/main")
      }}>
        <label>Enter your username </label>
        <input
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
          id="username"
          size="30"
          required
        />
        <label>Enter your password </label>
        <input
          value={pass}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          id="pass"
          size="16"
          required
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
