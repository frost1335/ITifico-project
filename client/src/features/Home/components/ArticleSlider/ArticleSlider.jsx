import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { article } from "../../assets";
import { ArticleCard, Loader } from "../../../../components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ArticleSlider.scss";
import { Pagination, Navigation } from "swiper";

import {
  mobileMaxWidth,
  slideSpaceBetween,
  slidesPerViewHomeLaptop,
  slidesPerViewHomeMobile,
  slidesPerViewHomeTablet,
  tabletMaxWidth,
} from "../../../../constants";
import { useGetArticlesQuery } from "../../../../services/articleApi";

const ArticleSlider = () => {
  const { data: articlesList, isLoading, isError } = useGetArticlesQuery();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(slidesPerViewHomeLaptop);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth > tabletMaxWidth) {
      setSlidesPerView(slidesPerViewHomeLaptop);
    } else if (windowWidth > mobileMaxWidth) {
      setSlidesPerView(slidesPerViewHomeTablet);
    } else {
      setSlidesPerView(slidesPerViewHomeMobile);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="articleslider">
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
        }}
        spaceBetween={slideSpaceBetween}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {isLoading || isError ? (
          <Loader />
        ) : articlesList?.data.length ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((article, idx) => (
            <SwiperSlide key={idx + "article"}>
              <ArticleCard article={article} />
            </SwiperSlide>
          ))
        ) : (
          <p>Articles not found</p>
        )}
      </Swiper>
    </div>
  );
};

export default ArticleSlider;
