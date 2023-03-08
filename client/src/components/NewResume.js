import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import getStorage from "../helpers/getStorage";
import { BASE_URL } from "../api/index";
import axios from "axios";

function NewResume() {
  const navigate = useNavigate();
  const [resumeData, setData] = useState({
    Name: "",
    FullName: "",
    JobTitle: "",
    Location: "",
    Phone: "",
    UserId: getStorage(),
  });

  const createResume = (e) => {
    e.preventDefault();
    const data = resumeData;
    data.UrlId =
      data.Name +
      "-" +
      data.FullName +
      "-" +
      Math.floor(Math.random() * (999 - 100 + 1) + 100);
    axios
      .post(BASE_URL + "api/Resume", data)
      .then((res) => {
        console.log(res);
        navigate("/experience");
        localStorage.setItem(`newResumeId`, JSON.stringify(res.data.id))
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      New resume
      <form noValidate autoComplete="off" onSubmit={createResume}>
        <label>
          Enter your name:
          <input
            type="text"
            value={resumeData.Name}
            onChange={(e) => {
              setData({ ...resumeData, Name: e.target.value });
            }}
          />
        </label>
        <label>
          Enter your Surname:
          <input
            type="text"
            value={resumeData.FullName}
            onChange={(e) => {
              setData({ ...resumeData, FullName: e.target.value });
            }}
          />
        </label>
        <label>
          Enter your Job title:
          <input
            type="text"
            value={resumeData.JobTitle}
            onChange={(e) => {
              setData({ ...resumeData, JobTitle: e.target.value });
            }}
          />
        </label>
        <label>
          Enter your location:
          <input
            type="text"
            value={resumeData.Location}
            onChange={(e) => {
              setData({ ...resumeData, Location: e.target.value });
            }}
          />
        </label>
        <label>
          Enter your mobile number:
          <input
            type="text"
            value={resumeData.Phone}
            onChange={(e) => {
              setData({ ...resumeData, Phone: e.target.value });
            }}
          />
        </label>
        
        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default NewResume;
