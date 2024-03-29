import Error from "@/components/Error";
import Loading from "@/components/Loading";
import MenuItem from "@/components/MenuItem";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Pizza = () => {
  const axios = useAxios();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["pizza"],
    queryFn: async () => {
      const { data } = await axios.get("/menus/pizza");
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
        <MenuItem key={"pizza-menu" + idx} inputData={ele} />
      ))}
    </div>
  );
};

export default Pizza;
