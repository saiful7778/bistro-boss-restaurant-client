import SectionTitle from "@/components/SectionTitle";
import featureImg1 from "@/assets/img/category/slide1.jpg";
import ProductItem from "@/components/ProductItem";

const data = [
  {
    id: 1,
    image: featureImg1,
    title: "Caeser Salad",
    des: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  },
  {
    id: 2,
    image: featureImg1,
    title: "Caeser Salad",
    des: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  },
  {
    id: 3,
    image: featureImg1,
    title: "Caeser Salad",
    des: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
  },
];

const Recommends = () => {
  return (
    <>
      <SectionTitle tagText="Should Try" titleText="chef recommends" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
        {data.map((ele) => (
          <ProductItem
            key={ele.id}
            image={ele.image}
            title={ele.title}
            des={ele.des}
          />
        ))}
      </div>
    </>
  );
};

export default Recommends;
