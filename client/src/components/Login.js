import React from "react";
import "../styles/Login.css"

function Login() {
  return (
    <>
      <form noValidate>
        <label>Enter your username </label>

        <input
          type="email"
          id="email"
          pattern=".+@globex\.com"
          size="30"
          required
        />
      </form>
    </>
  );
}

export default Login;
