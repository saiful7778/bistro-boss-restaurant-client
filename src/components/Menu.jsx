import { useQuery } from "@tanstack/react-query";
import { menuDataLoader } from "../myAPI";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["menus"],
    queryFn: menuDataLoader,
  });
  if (isLoading) {
    return <div>Loading data....</div>;
  }
  if (isError) {
    return <div>Error {error}</div>;
  }
  const renderMenu = data?.result?.map((menu) => (
    <MenuItem key={menu._id} itemData={menu} />
  ));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">{renderMenu}</div>
  );
};

export default Menu;
