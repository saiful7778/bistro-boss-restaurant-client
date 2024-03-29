import Loading from "@/components/Loading";
import SectionTitle from "@/components/SectionTitle";
import useAxios from "@/hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import ReviewItem from "@/components/ReviewItem";
import Error from "@/components/Error";

const Testimonial = () => {
  const axios = useAxios();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["testimonials"],
    queryFn: async () => {
      const { data } = await axios.get("/reviews");
      return data.data;
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <>
      <SectionTitle tagText="What Our Clients Say" titleText="testimonials" />
      <Swiper
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
      >
        {data.map((ele, idx) => (
          <SwiperSlide key={"testimonial" + idx}>
            <ReviewItem inputData={ele} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonial;
