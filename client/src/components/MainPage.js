import React from "react";
import getStorage from "../helpers/getStorage";
import setStorage from "../helpers/setStorage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api/index";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [button, setButton] = useState("Logout");
  useEffect(() => {
    axios
      .get(BASE_URL + "api/User/" + getStorage())
      .then((res) => {
        console.log(res.data);
        setUsername(res.data.userName);
      })
      .catch((err) => console.log(err));
  }, [getStorage()]);
  return (
    <>
      <div>{username}</div>
      {getStorage ? (
        <button
          onClick={() => {
            setStorage(null);
            setUsername("");
            setButton("Login");
            navigate("/");
          }}
        >
          {button}
        </button>
      ) : null}
    </>
  );
}

export default MainPage;
