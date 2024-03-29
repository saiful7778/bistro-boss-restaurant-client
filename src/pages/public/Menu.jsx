import PageBanner from "@/components/PageBanner";
import backGroundImg from "@/assets/img/chef-service.jpg";
import SectionTitle from "@/components/SectionTitle";
import Offered from "@/sections/menus/Offered";
import Dessert from "@/sections/menus/Dessert";
import Pizza from "@/sections/menus/Pizza";
import Salads from "@/sections/menus/Salads";
import Soups from "@/sections/menus/Soups";

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
        <Offered />
        <PageBanner
          bgImg={backGroundImg}
          title="desserts"
          des="Would you like to try our desserts?"
        />
        <Dessert />
        <PageBanner
          bgImg={backGroundImg}
          title="pizza"
          des="Would you like to try our pizza?"
        />
        <Pizza />
        <PageBanner
          bgImg={backGroundImg}
          title="salads"
          des="Would you like to try our salads?"
        />
        <Salads />
        <PageBanner
          bgImg={backGroundImg}
          title="soups"
          des="Would you like to try our soups?"
        />
        <Soups />
      </div>
    </>
  );
};

export default Menu;
