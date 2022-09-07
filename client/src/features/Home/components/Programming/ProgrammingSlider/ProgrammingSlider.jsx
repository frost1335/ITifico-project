import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useTranslation } from "react-i18next";

import ProgrammingImg1 from "../../AnimationImages/ProgrammingImg1/ProgrammingImg1";
import ProgrammingImg2 from "../../AnimationImages/ProgrammingImg2/ProgrammingImg2";
import ProgrammingImg3 from "../../AnimationImages/ProgrammingImg3/ProgrammingImg3";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ProgrammingSlider.scss";

import {
  homeProgSlidePerView,
  slideSpaceBetween,
} from "../../../../../constants";
import { LeftArrowIcon, RightArrowIcon } from "../../../../../components";

const ProgrammingSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState("");

  const { t } = useTranslation();

  useEffect(() => {}, [navigationPrevRef, navigationNextRef]);

  const onClickPrevButton = () => {
    setPrevDisabled(
      navigationPrevRef.current.classList.value === "swiper-button-disabled"
    );
    setNextDisabled(false);
  };

  const onClickNextButton = () => {
    setNextDisabled(
      navigationNextRef.current.classList.value === "swiper-button-disabled"
    );
    setPrevDisabled(false);
  };

  return (
    <div className="programming__slider">
      <Swiper
        slidesPerView={homeProgSlidePerView}
        spaceBetween={slideSpaceBetween}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide key={"article1"}>
          <div className="content__block">
            <ProgrammingImg1 />
            <h4 className="block__text block__text--first">
              {t("home_programming_content1")}
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide key={"article2"}>
          <div className="content__block">
            <ProgrammingImg2 />
            <h4 className="block__text block__text--second">
              {t("home_programming_content2")}
            </h4>
          </div>
        </SwiperSlide>
        <SwiperSlide key={"article3"}>
          <div className="content__block">
            <ProgrammingImg3 />
            <h4 className="block__text block__text--third">
              {t("home_programming_content3")}
            </h4>
          </div>
        </SwiperSlide>
        <div className="swiper__pagination">
          <div ref={navigationPrevRef} onClick={onClickPrevButton}>
            <LeftArrowIcon disabled={prevDisabled} />
          </div>
          <div ref={navigationNextRef} onClick={onClickNextButton}>
            <RightArrowIcon disabled={nextDisabled} />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ProgrammingSlider;
