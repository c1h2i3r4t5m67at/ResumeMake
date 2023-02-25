import axios from "axios";
import setStorage from "../helpers/setStorage";

export const BASE_URL = "http://localhost:5133/";

export const ENDPOINTS = {
  user: "user",
  resume: "resume",
  experience: "experience",
  skill: "experience/skills",
};

export const login = (n, p, e) => {
  e.preventDefault();
  let data = {
    UserName: n,
    Password: p,
  };
  axios
    .post(BASE_URL + "api/User", data)
    .then((res) => {
      console.log(res);
      setStorage(res.data.id)
    })
    .catch((err) => console.log(err));
};

export const createAPIEndpoint = (endpoint) => {
  let url = BASE_URL + "api/" + endpoint + "/";
  return {
    fetch: () => axios.get(url),
    fetchById: (id) => axios.get(url + id),
    post: (newRecord) => axios.post(url, newRecord),
    put: (id, updatedRecord) => axios.put(url + id, updatedRecord),
    delete: (id) => axios.delete(url + id),
  };
};
