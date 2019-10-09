import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.15.75:3333"
  // baseURL: "http://172.19.0.1:3333"
});

export default api;
