import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-e-commerce-75298.cloudfunctions.net/api",
});

export default instance;
