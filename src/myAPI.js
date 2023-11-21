import axiosSecure from "./config/axios.config";

const menuDataLoader = async (size) => {
  const res = await axiosSecure.get("/menus", { params: { size } });
  return res.data;
};

export { menuDataLoader };
