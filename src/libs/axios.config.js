import axios from "axios";

const axiosBase = axios.create({
  // baseURL: "http://localhost:5001",
  baseURL: "https://bistro-boss-restaurant-server-eosin.vercel.app",
});

export default axiosBase;
