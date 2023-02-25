import React from "react";
import { useState } from "react";
import axios from "axios";
import "../styles/Login.css";
import setStorage from "../helpers/setStorage";
import {BASE_URL} from "../api/index"

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
      .post(BASE_URL + "api/User", data)
      .then((res) => {
        console.log(res);
        setStorage(res.data.id)
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
