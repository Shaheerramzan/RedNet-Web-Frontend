import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8090/Struts2Backend_war_exploded",
  headers: {
    "Content-type": "application/x-www-form-urlencoded",
  },
});
