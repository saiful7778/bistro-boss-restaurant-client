import SectionTitle from "@/components/SectionTitle";
import featureImg from "@/assets/img/featured.jpg";
import { Button } from "keep-react";

const Featured = () => {
  return (
    <div
      className="my-16 w-full bg-cover bg-center bg-no-repeat p-4 text-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${featureImg}')`,
        backgroundAttachment: "fixed",
      }}
    >
      <SectionTitle
        className="my-0 mb-10"
        tagText="Check it out"
        titleText="from our menu"
      />
      <div className="mx-auto mb-16 flex w-[90%] flex-col items-center justify-center gap-8 md:flex-row">
        <img className="md:w-1/2" src={featureImg} alt="Feature image" />
        <div className="flex-1 space-y-2">
          <h6 className="text-sm">March 20, 2023</h6>
          <h4 className="text-xl font-medium">WHERE CAN I GET SOME?</h4>
          <p>
            Discover our restaurant{`'`}s features: immersive virtual menus,
            seamless online reservations, personalized recommendations, and
            interactive dining experiences. Elevate your culinary journey with
            our innovative approach to modern dining technology.
          </p>
          <Button className="btn" size="xs" color="primary">
            read more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
