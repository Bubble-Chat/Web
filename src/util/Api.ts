import axios from "axios";
import serverUrl from "../config/config.json";

const API = axios.create({
  baseURL: serverUrl.serverUrl,
  headers: {
    Authorization: localStorage.getItem("accessToken"),
  },
});

export default API;
