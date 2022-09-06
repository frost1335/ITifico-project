import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { article } from "../../assets";
import {
  ArticleCard,
  LeftArrowIcon,
  Loader,
  RightArrowIcon,
} from "../../../../components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ArticleSlider.scss";
import { Pagination, Navigation } from "swiper";

import {
  laptop2MaxWidth,
  mobileMaxWidth,
  slideSpaceBetween,
  slidesPerViewHomeLaptop,
  slidesPerViewHomeLaptop2,
  slidesPerViewHomeMobile,
  slidesPerViewHomeTablet,
  tabletMaxWidth,
} from "../../../../constants";

const ArticleSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState("");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(slidesPerViewHomeLaptop);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth > laptop2MaxWidth) {
      setSlidesPerView(slidesPerViewHomeLaptop);
    } else if (windowWidth > tabletMaxWidth) {
      setSlidesPerView(slidesPerViewHomeLaptop2);
    } else if (windowWidth > mobileMaxWidth) {
      setSlidesPerView(slidesPerViewHomeTablet);
    } else {
      setSlidesPerView(slidesPerViewHomeMobile);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, navigationPrevRef, navigationNextRef]);

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
    <div className="articleslider">
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        spaceBetween={slideSpaceBetween}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((article, idx) => (
          <SwiperSlide key={idx + "article"}>
            <ArticleCard article={article} />
          </SwiperSlide>
        ))}
        <div className="swiper__pagination">
          <div ref={navigationPrevRef} onClick={onClickPrevButton}>
            <LeftArrowIcon disabled={prevDisabled} />
          </div>
          <div ref={navigationNextRef} onClick={onClickNextButton}>
            <RightArrowIcon disabled={nextDisabled} />
          </div>
        </div>
        {/* <p>Articles not found</p> */}
      </Swiper>
    </div>
  );
};

export default ArticleSlider;
