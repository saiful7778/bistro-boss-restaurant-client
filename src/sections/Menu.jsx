import Error from "@/components/Error";
import Loading from "@/components/Loading";
import MenuItem from "@/components/MenuItem";
import SectionTitle from "@/components/SectionTitle";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Button } from "keep-react";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const axios = useAxios();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await axios.get("/menus", {
        params: { limit: 6 },
      });
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
    <>
      <SectionTitle tagText="Check it out" titleText="from our menu" />
      <div className="mb-16 grid grid-cols-1 gap-6 p-4 md:grid-cols-2">
        {data.map((ele, idx) => (
          <MenuItem key={"menu" + idx} inputData={ele} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => navigate("/menu")}
          className="btn mx-auto"
          size="xs"
          color="primary"
        >
          View Full Menu
        </Button>
      </div>
    </>
  );
};

export default Menu;
