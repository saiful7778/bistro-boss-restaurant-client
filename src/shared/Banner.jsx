import { useState, useEffect } from "react";
import bannerBg1 from "@/assets/img/banner/01.jpg";
import bannerBg2 from "@/assets/img/banner/02.jpg";
import bannerBg3 from "@/assets/img/banner/03.png";
import bannerBg4 from "@/assets/img/banner/04.jpg";
import bannerBg5 from "@/assets/img/banner/05.png";
import bannerBg6 from "@/assets/img/banner/06.png";
import cn from "@/libs/cn";

const bannerBg = [
  { _id: "bnbg1", imgPath: bannerBg1, imgAlt: "banner background image 1" },
  { _id: "bnbg2", imgPath: bannerBg2, imgAlt: "banner background image 2" },
  { _id: "bnbg3", imgPath: bannerBg3, imgAlt: "banner background image 3" },
  { _id: "bnbg4", imgPath: bannerBg4, imgAlt: "banner background image 4" },
  { _id: "bnbg5", imgPath: bannerBg5, imgAlt: "banner background image 5" },
  { _id: "bnbg6", imgPath: bannerBg6, imgAlt: "banner background image 6" },
];

const HomeBanner = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const changeImgTimer = setInterval(() => {
      setCurrentIdx((prop) => (prop + 1) % bannerBg.length);
    }, 3000);
    return () => {
      clearInterval(changeImgTimer);
    };
  }, []);

  return (
    <>
      <div className="relative mx-auto h-[70vh] w-full overflow-hidden lg:w-3/4">
        {bannerBg.map((banner, idx) => (
          <img
            key={banner._id}
            className={cn(
              "absolute h-full w-full object-cover object-center opacity-0 duration-500",
              currentIdx === idx && "opacity-100",
            )}
            src={banner.imgPath}
            alt={banner.imgAlt}
          />
        ))}
        <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-4">
          {bannerBg.map((_, idx) => (
            <button
              onClick={() => setCurrentIdx(idx)}
              key={"dot" + idx}
              type="button"
            >
              <div
                className={cn(
                  "size-4 rounded-full shadow-xl",
                  currentIdx === idx
                    ? "bg-sky-600 outline outline-offset-2 outline-sky-600"
                    : "bg-white",
                )}
              ></div>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
        {bannerBg.map((bannerThumb, idx) => (
          <button
            key={"thm" + bannerThumb._id}
            onClick={() => setCurrentIdx(idx)}
            type="button"
          >
            <img
              className={cn(
                "w-36 hover:opacity-100",
                currentIdx === idx
                  ? "ring-4 ring-black ring-opacity-80 ring-offset-4"
                  : "opacity-50",
              )}
              src={bannerThumb.imgPath}
              alt={bannerThumb.imgAlt}
            />
          </button>
        ))}
      </div>
    </>
  );
};

export default HomeBanner;
