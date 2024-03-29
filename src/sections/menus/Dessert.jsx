import Error from "@/components/Error";
import Loading from "@/components/Loading";
import MenuItem from "@/components/MenuItem";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Dessert = () => {
  const axios = useAxios();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["dessert"],
    queryFn: async () => {
      const { data } = await axios.get("/menus/dessert");
      return data.data;
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <div className="my-16 grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
      {data.map((ele, idx) => (
        <MenuItem key={"dessert-menu" + idx} inputData={ele} />
      ))}
    </div>
  );
};

export default Dessert;
