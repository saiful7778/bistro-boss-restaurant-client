import { useEffect } from "react";
import axiosSecure from "../config/axios.config";

const useAxios = () => {
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log(err);
      }
    );
  });
  return axiosSecure;
};

export default useAxios;
