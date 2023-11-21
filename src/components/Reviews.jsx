import { useQuery } from "@tanstack/react-query";
import { reviewDataLoader } from "../myAPI";
import Loading from "./Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ReviewItem from "./ReviewItem";

const Reviews = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: reviewDataLoader,
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error {error}</div>;
  }
  const renderSlides = data?.result?.map((slide) => (
    <SwiperSlide key={slide._id}>
      <ReviewItem inputData={slide} />
    </SwiperSlide>
  ));
  return (
    <Swiper
      loop={true}
      navigation={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
    >
      {renderSlides}
    </Swiper>
  );
};

export default Reviews;
