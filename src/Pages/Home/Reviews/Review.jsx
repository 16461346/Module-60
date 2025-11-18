import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

const Review = ({ reviewPromise }) => {
  const reviews = use(reviewPromise);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-center font-bold text-secondary">Reviews</h1>
        <p className="w-[50%] leading-5 pt-2  mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          quibusdam. Unde hic nemo veniam soluta similique, corrupti quia ea
          sequi.
        </p>
      </div>
      <div className="my-10">
        <Swiper
          loop={true}
          autoplay={{
            delay:2000,
            disableOnInteraction:false,
          }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 30,
            stretch: '50%',
            depth: 200,
            modifier: 1,
            scale: 0.75,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow,Autoplay]}
          className="mySwiper"
        >
          {reviews?.map((Review) => (
            <SwiperSlide key={Review.id}>
              <ReviewCard Review={Review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
