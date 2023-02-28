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
  const [resumes, setResumes] = useState([]);
  useEffect(() => {
    axios
      .get(BASE_URL + "api/User/" + getStorage())
      .then((res) => {
        console.log(res.data);
        setUsername(res.data.userName);
      })
      .catch((err) => console.log(err));
  }, [getStorage()]);
  useEffect(() => {
    axios
      .get(BASE_URL + "api/Resume/GetByUser/" + getStorage())
      .then((res) => {
        console.log(res.data);
        setResumes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const deleteResume = (e) => {
    axios
      .delete(BASE_URL + "api/Resume/" + e)
      .then((res) => {
        console.log(resumes);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div>{username ? username : "loading..."}</div>
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
      <button onClick={() => navigate("/newResume")}>Add resume</button>
      <table>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>jobTitle</th>
        </tr>
        <tbody>
          {resumes.map((resume) => (
            <tr>
              <td>{resume.id}</td>
              <td>{resume.name}</td>
              <td>{resume.fullName}</td>
              <td>{resume.location}</td>
              <td>{resume.jobTitle}</td>
              <button onClick={() => deleteResume(resume.id)}>Delete</button>
              <button>View</button>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MainPage;
