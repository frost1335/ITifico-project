import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ProgrammingImg1 from "../../AnimationImages/ProgrammingImg1/ProgrammingImg1";
import ProgrammingImg2 from "../../AnimationImages/ProgrammingImg2/ProgrammingImg2";
import ProgrammingImg3 from "../../AnimationImages/ProgrammingImg3/ProgrammingImg3";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ProgrammingSlider.scss";

const ProgrammingSlider = () => {
  return (
    <div className="programming__slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide key={"article1"}>
          <div className="content__block">
            <ProgrammingImg1 />
            <h4 className="block__text block__text--first">
              Ви можете реалізувати свої ідеї за допомогою коду в кілька рядків
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide key={"article2"}>
          <div className="content__block">
            <ProgrammingImg2 />
            <h4 className="block__text block__text--second">
              Ви можете кодувати будь-де
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide key={"article3"}>
          <div className="content__block">
            <ProgrammingImg3 />
            <h4 className="block__text block__text--third">
              Програмісти затребувані скрізь
            </h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProgrammingSlider;
