import PageBanner from "@/components/PageBanner";
import backGroundImg from "@/assets/img/chef-service.jpg";
import SectionTitle from "@/components/SectionTitle";

const Menu = () => {
  return (
    <>
      <PageBanner
        bgImg={backGroundImg}
        title="our menu"
        des="Would you like to try a dish?"
      />
      <div className="container p-2">
        <SectionTitle titleText="TODAY'S OFFER" tagText="Don't miss" />
      </div>
    </>
  );
};

export default Menu;
