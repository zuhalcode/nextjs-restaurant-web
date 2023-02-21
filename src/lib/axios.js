import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3000/api", // replace with your API URL
  timeout: 10000, // set the maximum timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
