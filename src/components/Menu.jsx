import { useQuery } from "@tanstack/react-query";
import { menuDataLoader } from "../myAPI";
import MenuItem from "./MenuItem";
import { useState } from "react";
import Loading from "./Loading";

const Menu = () => {
  const [loadCount, setLoadCount] = useState(6);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["menus", { size: loadCount }],
    queryFn: () => menuDataLoader(loadCount),
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error {error}</div>;
  }
  const renderMenu = data?.result?.map((menu, idx) => (
    <div key={menu._id}>
      <p>{idx + 1}</p>
      <MenuItem itemData={menu} />
    </div>
  ));
  return (
    <>
      <div className="grid grid-cols-1 res:grid-cols-2 gap-6 p-4">
        {renderMenu}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setLoadCount((prop) => prop + 4)}
          className="border border-gray-500 py-1 px-3 active:focus:scale-95 duration-200"
          type="button"
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default Menu;
