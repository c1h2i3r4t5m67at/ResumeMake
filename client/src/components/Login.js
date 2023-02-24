import React from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router";
import useForm from "../hooks/useForm";
import { createAPIEndpoint, ENDPOINTS } from "../api";
import useStateContext from "../hooks/useStateContext";

function Login() {
  const { context, setContext, resetContext } = useStateContext();
  const navigate = useNavigate();

  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(getFreshModel);

  useEffect(() => {
    resetContext();
  }, []);

  const login = (e) => {
    e.preventDefault();
    if (validate())
      createAPIEndpoint(ENDPOINTS.user)
        .post(values)
        .then((res) => {
          setContext({ Id: res.data.Id });
          navigate("/");
        })
        .catch((err) => console.log(err));
  };

  const validate = () => {
    let temp = {};
    temp.UserName = test(values.UserName) ? "" : "Name is not valid.";
    temp.password = values.password != "" ? "" : "This field is required.";
    setErrors(temp);
    return Object.values(temp).every((x) => x == "");
  };

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={login}>
        <label>Enter your username </label>
        <input
          value={values.UserName}
          onChange={handleInputChange}
          type="text"
          id="username"
          size="30"
          {...(errors.UserName && { error: true, helperText: errors.UserName })}
          required
        />
        <label>Enter your password </label>
        <input type="password" value="" id="pass" size="16" required />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
