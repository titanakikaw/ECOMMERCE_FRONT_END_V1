import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3000",
  timeout: "5000",
  timeoutErrorMessage: "Request Timeout, Please try again later",
});
