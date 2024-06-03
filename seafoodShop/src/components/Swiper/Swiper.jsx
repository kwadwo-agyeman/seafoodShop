import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import { favMealArray } from "../../pages/Landing_page/landing_page";

export default function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      const nextBtn = document.querySelector(".swiper-button-next");
      if (nextBtn) {
        nextBtn.click();
      }
    }, 3000);

    return ()=> clearInterval(interval)
  }, []);


  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
        speed={700}
        autoplay={{
            delay: 600,
            disableOnInteraction:"false"
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
      >
        {
            favMealArray.map(({foodImg,foodName},index)=>(
                <SwiperSlide className="swiper-slide" key={index} >
                    <img src={foodImg} alt={foodName} />
                    <article className="img--name">{foodName}</article>
                </SwiperSlide>
            ))
        }
      </Swiper>
    </>
  );
}
