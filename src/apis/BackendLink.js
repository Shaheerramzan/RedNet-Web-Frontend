import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090/Struts2Backend_war_exploded",
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  },
});
