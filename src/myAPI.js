import axiosSecure from "./config/axios.config";

const menuDataLoader = async () => {
  const res = await axiosSecure.get("/menus");
  return res.data;
};

export { menuDataLoader };
