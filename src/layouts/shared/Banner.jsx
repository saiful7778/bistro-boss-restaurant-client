import { useState, useEffect } from "react";
import bannerBg1 from "../../assets/img/01.jpg";
import bannerBg2 from "../../assets/img/02.jpg";
import bannerBg3 from "../../assets/img/03.png";
import bannerBg4 from "../../assets/img/04.jpg";
import bannerBg5 from "../../assets/img/05.png";
import bannerBg6 from "../../assets/img/06.png";

const bannerBg = [
  { _id: "bnbg1", imgPath: bannerBg1, imgAlt: "banner background image 1" },
  { _id: "bnbg2", imgPath: bannerBg2, imgAlt: "banner background image 2" },
  { _id: "bnbg3", imgPath: bannerBg3, imgAlt: "banner background image 3" },
  { _id: "bnbg4", imgPath: bannerBg4, imgAlt: "banner background image 4" },
  { _id: "bnbg5", imgPath: bannerBg5, imgAlt: "banner background image 5" },
  { _id: "bnbg6", imgPath: bannerBg6, imgAlt: "banner background image 6" },
];

const Banner = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  //   useEffect(() => {}, []);
  const renderbannerBg = bannerBg.map((banner, idx) => (
    <img
      key={banner._id}
      className={`banner-bg ${currentIdx === idx ? "active" : ""}`}
      src={banner.imgPath}
      alt={banner.imgAlt}
    />
  ));
  const renderBannerThumb = bannerBg.map((bannerThumb, idx) => (
    <button
      key={"thm" + bannerThumb._id}
      onClick={() => setCurrentIdx(idx)}
      type="button"
    >
      <img
        className={`w-36 ${
          currentIdx === idx
            ? "ring-4 ring-opacity-80 ring-black ring-offset-4"
            : ""
        }`}
        src={bannerThumb.imgPath}
        alt={bannerThumb.imgAlt}
      />
    </button>
  ));
  const renderDots = bannerBg.map((_, idx) => (
    <button onClick={() => setCurrentIdx(idx)} key={"dot" + idx} type="button">
      <div
        className={`w-4 h-4 shadow-xl rounded-full ${
          currentIdx === idx ? "bg-sky-600" : "bg-white"
        }`}
      ></div>
    </button>
  ));
  return (
    <div>
      <div className="w-full h-screen overflow-hidden relative">
        {renderbannerBg}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-4">
          {renderDots}
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center flex-wrap mt-4">
        {renderBannerThumb}
      </div>
    </div>
  );
};

export default Banner;
