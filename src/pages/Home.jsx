import HomeBanner from "../layouts/shared/HomeBanner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import featureImg from "../assets/img/featured.jpg";
import featureImg1 from "../assets/img/slide1.jpg";
import featureImg2 from "../assets/img/slide2.jpg";
import featureImg3 from "../assets/img/slide3.jpg";
import featureImg4 from "../assets/img/slide4.jpg";
import featureImg5 from "../assets/img/slide5.jpg";
import backGroundImg from "../assets/img/chef-service.jpg";
import Menu from "../components/Menu";
import Title from "../components/utility/title";
import Reviews from "../components/Reviews";
import Footer from "../layouts/shared/Footer";

const Home = () => {
  return (
    <>
      <header className="mb-6">
        <HomeBanner />
      </header>
      <main>
        <div className="container res:w-4/5 w-full mx-auto my-16">
          <Title tagText="From 11:00am to 10:00pm" titleText="order online" />
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
                <Feature
                  imgPath={featureImg2}
                  text="soups"
                  path="/menu/soups"
                />
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
                officiis praesentium! Deserunt magni aperiam dolor eius dolore
                at, nihil iusto ducimus incidunt quibusdam nemo.
              </p>
            </div>
          </div>
          <Title tagText="Check it out" titleText="from our menu" />
          <div className="my-16">
            <Menu />
          </div>
          <div className="my-16 p-6 text-center bg-gray-900 text-white">
            <h5 className="my-16 text-4xl font-semibold">
              Call Us: +88 0192345678910
            </h5>
          </div>
          <Title tagText="Should Try" titleText="chef recommends" />
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 p-4">
            <div className="text-center">
              <figure className="h-64 overflow-hidden w-full">
                <img
                  className="w-full h-full object-cover object-center"
                  src={featureImg1}
                  alt="feature image"
                />
              </figure>
              <div className="p-8 space-y-2 bg-amber-50">
                <h6 className="text-2xl font-semibold">Caeser Salad</h6>
                <p className="text-gray-600 text-sm">
                  Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </p>
                <button className="btn" type="button">
                  add to cart
                </button>
              </div>
            </div>
            <div className="text-center">
              <figure className="h-64 overflow-hidden w-full">
                <img
                  className="w-full h-full object-cover object-center"
                  src={featureImg1}
                  alt="feature image"
                />
              </figure>
              <div className="p-8 space-y-2 bg-amber-50">
                <h6 className="text-2xl font-semibold">Caeser Salad</h6>
                <p className="text-gray-600 text-sm">
                  Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </p>
                <button className="btn" type="button">
                  add to cart
                </button>
              </div>
            </div>
            <div className="text-center">
              <figure className="h-64 overflow-hidden w-full">
                <img
                  className="w-full h-full object-cover object-center"
                  src={featureImg1}
                  alt="feature image"
                />
              </figure>
              <div className="p-8 space-y-2 bg-amber-50">
                <h6 className="text-2xl font-semibold">Caeser Salad</h6>
                <p className="text-gray-600 text-sm">
                  Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
                </p>
                <button className="btn" type="button">
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full p-4  text-white"
          style={{
            background: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url('${featureImg}')`,
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Title tagText="Check it out" titleText="from our menu" />
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 w-4/5 mx-auto">
            <img className="md:w-1/2" src={featureImg} alt="Feature image" />
            <div className="space-y-2 flex-1">
              <h6 className="text-sm">March 20, 2023</h6>
              <h4 className="text-xl font-medium">WHERE CAN I GET SOME?</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn" type="button">
                read more
              </button>
            </div>
          </div>
        </div>
        <div className="container res:w-4/5 w-full mx-auto my-16">
          <Title tagText="What Our Clients Say" titleText="testimonials" />
          <div className="res:p-4">
            <Reviews />
          </div>
        </div>
      </main>

      <Footer />
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
