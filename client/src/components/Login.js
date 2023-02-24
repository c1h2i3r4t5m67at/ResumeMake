import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";

function Login() {
  const [val, setVal] = useState("");
  const [pass, setPass] = useState("");

  const login = (e) => {
    e.preventDefault();
    let data = {
      UserName: val,
      Password: pass,
    };
    axios
      .post("http://localhost:5133/api/User", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={login}>
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
