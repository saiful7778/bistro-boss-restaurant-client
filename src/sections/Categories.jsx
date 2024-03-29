import FeatureItem from "@/components/FeatureItem";
import SectionTitle from "@/components/SectionTitle";
import categoryImg1 from "@/assets/img/category/slide1.jpg";
import categoryImg2 from "@/assets/img/category/slide2.jpg";
import categoryImg3 from "@/assets/img/category/slide3.jpg";
import categoryImg4 from "@/assets/img/category/slide4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Categories = () => {
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
              imgPath={categoryImg1}
              text="Salads"
              path="/menu/salads"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureItem
              imgPath={categoryImg2}
              text="soups"
              path="/menu/soups"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureItem
              imgPath={categoryImg3}
              text="pizzas"
              path="/menu/pizzas"
            />
          </SwiperSlide>
          <SwiperSlide>
            <FeatureItem
              imgPath={categoryImg4}
              text="desserts"
              path="/menu/desserts"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Categories;
