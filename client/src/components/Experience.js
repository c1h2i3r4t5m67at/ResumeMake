import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import getStorage from "../helpers/getStorage";
import { BASE_URL } from "../api/index";
import axios from "axios";

function Experience() {
  useEffect(() => {
    let id =JSON.parse(localStorage.getItem(`newResumeId`));
    axios
    .get(BASE_URL + "api/Resume/" +id)
    .then((res) => {
      console.log(res);
      setResume({ FullName: res.data.FullName, Name: res.data.Name, JobTitle: res.data.JobTitle, Location: res.data.Location, Phone: res.data.Phone, UserId:  res.data.UserId, UrlId: res.data.FullName + `-` + res.data.Name })
      console.log(resume);
    })
    .catch((err) => console.log(err));
  }, []);
  const [resume, setResume] = useState({
    Name: "",
    FullName: "",
    JobTitle: "",
    Location: "",
    Phone: "",
    UrlId: ``,
    UserId: getStorage(),
  });
  const [experience, setExperience] = useState({
    ResumeId: 1,
    IsStillWorkingHere: true,
    Role: "dcfsd",
    OrganisationName: "dscsc",
    Description: "dscf",
    Responsibilities: "dscds",
    resume: resume,
  });
  const createExperience = (e) => {
    e.preventDefault();
    const data = experience;
    axios
      .post(BASE_URL + "api/Experience", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h5 onClick={createExperience}>Experience </h5>
    </>
  );
}

export default Experience;
