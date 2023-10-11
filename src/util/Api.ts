import axios from "axios";
import serverUrl from "../config/config.json";

const API = axios.create({
  baseURL: serverUrl.serverUrl,
});

export default API;
