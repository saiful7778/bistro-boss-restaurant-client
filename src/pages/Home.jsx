import HomeBanner from "../layouts/shared/HomeBanner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import featureImg1 from "../assets/img/slide1.jpg";
import featureImg2 from "../assets/img/slide2.jpg";
import featureImg3 from "../assets/img/slide3.jpg";
import featureImg4 from "../assets/img/slide4.jpg";
import featureImg5 from "../assets/img/slide5.jpg";
import backGroundImg from "../assets/img/chef-service.jpg";

const Home = () => {
  return (
    <>
      <header className="mb-6">
        <HomeBanner />
      </header>
      <main className="container res:w-4/5 w-full mx-auto my-16">
        <div className="text-center w-fit mx-auto my-6">
          <p className="text-acc-text italic py-4">
            ---From 11:00am to 10:00pm---
          </p>
          <h3 className="uppercase text-4xl py-3 border-y-4 border-gray-300">
            order online
          </h3>
        </div>
        <div className="mt-8 p-4 text-white font-cinzel text-4xl">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            breakpoints={{
              500: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            <SwiperSlide>
              <Feature
                imgPath={featureImg1}
                text="Salads"
                path="/menu/salads"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Feature imgPath={featureImg2} text="soups" path="/menu/soups" />
            </SwiperSlide>
            <SwiperSlide>
              <Feature
                imgPath={featureImg3}
                text="pizzas"
                path="/menu/pizzas"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Feature
                imgPath={featureImg4}
                text="desserts"
                path="/menu/desserts"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Feature
                imgPath={featureImg5}
                text="Salads"
                path="/menu/Salads"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div
          className="w-full p-6 sm:p-8 bg-no-repeat bg-center bg-cover"
          style={{ background: `url('${backGroundImg}')` }}
        >
          <div className="res:w-4/5 mx-auto text-center bg-white res:my-20 p-6 res:p-20">
            <h3 className="font-cinzel text-4xl font-medium mb-4">
              Bistro Boss
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
        <div className="text-center w-fit mx-auto my-6">
          <p className="text-acc-text italic py-4">---Check it out---</p>
          <h3 className="uppercase text-4xl py-3 border-y-4 border-gray-300">
            FROM OUR MENU
          </h3>
        </div>
      </main>
    </>
  );
};

const Feature = ({ imgPath, text, path }) => {
  return (
    <div className="relative">
      <img className="w-full h-full" src={imgPath} alt="feature image" />
      <div className="absolute w-full h-[30%] bottom-0 left-0 text-center bg-gradient-to-b from-[#00000005] to-[#000000dd]">
        <Link
          to={path}
          className="drop-shadow-2xl inline-block mt-8 hover:text-accent hover:underline"
        >
          {text}
        </Link>
      </div>
    </div>
  );
};

Feature.propTypes = {
  imgPath: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
};

export default Home;
