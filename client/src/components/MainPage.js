import React from "react";
import getStorage from "../helpers/getStorage";
import setStorage from "../helpers/setStorage";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../api/index";
import { useNavigate } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

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
  const passId = (e) => {
    localStorage.setItem(`resumeId`, JSON.stringify(e));
    navigate("/viewresume")
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
      <Table striped   >
        <tr>
          <th>Resume</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>jobTitle</th>
        </tr>
        <tbody>
          {resumes.map((resume, index) => (
            <tr>
              <td>{index+1}</td>
              <td>{resume.name}</td>
              <td>{resume.fullName}</td>
              <td>{resume.location}</td>
              <td>{resume.jobTitle}</td>
              <Button variant="outline-primary" onClick={() => deleteResume(resume.id)}>Delete</Button>
              <Button variant="outline-primary" onClick={() => passId(resume.id)}>View</Button>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default MainPage;
