import { Link } from "react-router-dom";
import siteLogo from "@/assets/img/site-logo.png";

const SiteLogo = () => {
  return (
    <Link to="/" className="flex items-center gap-1">
      <img className="size-10" src={siteLogo} alt="site logo" />
      <div className="font-cinzel text-sm">
        <div className="font-bold">BISTRO BOSS</div>
        <div className="leading-3 tracking-[0.08em]">Restaurant</div>
      </div>
    </Link>
  );
};

export default SiteLogo;
