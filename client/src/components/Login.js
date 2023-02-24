import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <>
      <form noValidate>
        <label>Enter your username </label>
        <input type="text" id="username" size="30" required />
        <label>Enter your password </label>
        <input type="password" id="pass" size="16" required />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
