import SectionTitle from "@/components/SectionTitle";
import ProductItem from "@/components/ProductItem";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

const Recommends = () => {
  const axios = useAxios();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recommends"],
    queryFn: async () => {
      const { data } = await axios.get("/menus/offered", {
        params: { limit: 3 },
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
      <SectionTitle tagText="Should Try" titleText="chef recommends" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
        {data.map((ele, idx) => (
          <ProductItem key={"offered" + idx} inputData={ele} />
        ))}
      </div>
    </>
  );
};

export default Recommends;
