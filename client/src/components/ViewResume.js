import React from "react";
import axios from "axios";
import { BASE_URL } from "../api/index";
import { useState, useEffect } from "react";
import EditDetails from "./EditDetails";
import 'bootstrap/dist/css/bootstrap.css';

function ViewResume() {
  const [resume, setResume] = useState({});
  useEffect(() => {
    let id = JSON.parse(localStorage.getItem(`resumeId`));
    axios
      .get(BASE_URL + "api/Resume/" + id)
      .then((res) => {
        console.log(res.data);
        setResume(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div><h4>Main information</h4>
        <div>Name: {resume.name}</div>
          <div>Surname: {resume.fullName}</div>
        <div>Job title: {resume.jobTitle}</div>
        <div>Location: {resume.location}</div>
        <div>Mobile number: {resume.phone}</div>
      </div>
      <EditDetails resume={resume} setResume={setResume} />
      <h5>Experience </h5>
    </>
  );
}

export default ViewResume;
