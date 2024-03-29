import FeatureItem from "@/components/FeatureItem";
import SectionTitle from "@/components/SectionTitle";
import featureImg1 from "@/assets/img/feature/slide1.jpg";
import featureImg2 from "@/assets/img/feature/slide2.jpg";
import featureImg3 from "@/assets/img/feature/slide3.jpg";
import featureImg4 from "@/assets/img/feature/slide4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Feature = () => {
  return (
    <>
      <SectionTitle
        tagText="From 11:00am to 10:00pm"
        titleText="order online"
      />
      <div className="font-cinzel text-4xl text-white">
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={10}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            375: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
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
            <FeatureItem
              imgPath={featureImg1}
              text="Salads"
              path="/menu/salads"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureItem
              imgPath={featureImg2}
              text="soups"
              path="/menu/soups"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureItem
              imgPath={featureImg3}
              text="pizzas"
              path="/menu/pizzas"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureItem
              imgPath={featureImg4}
              text="desserts"
              path="/menu/desserts"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Feature;
