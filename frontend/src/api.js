import axios from "axios";

const api = axios.create({
  baseURL: "https://birdmytrip1.onrender.com/api",
});

export default api;
