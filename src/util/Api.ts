import axios from "axios";

const API = axios.create({
  baseURL: "http://10.80.161.132.nip.io:8080",
});

export default API;
