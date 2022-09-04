import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NewArticles.scss";

import { Pagination, Navigation } from "swiper";
import {
  ArticleCard,
  LeftArrowIcon,
  RightArrowIcon,
} from "../../../../components";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  mobileMaxWidth,
  slideSpaceBetween,
  slidesPerViewLaptop,
  slidesPerViewMobile,
  slidesPerViewTablet,
  tabletMaxWidth,
} from "../../../../constants";

const NewArticles = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  const { t } = useTranslation();
  const [slidesPerView, setSlidesPerView] = useState(slidesPerViewLaptop);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    if (windowWidth > tabletMaxWidth) setSlidesPerView(slidesPerViewLaptop);
    else if (windowWidth > mobileMaxWidth)
      setSlidesPerView(slidesPerViewTablet);
    else setSlidesPerView(slidesPerViewMobile);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return (
    <div className="new__articles">
      <div className="articles__header">
        <h2 className="header__title">{t("blogdetail_footer_otherarticle")}</h2>
        <Link to="/blog" className="header__button">
          {t("blogdetail_footer_morearticle")}
        </Link>
      </div>
      <div className="articleslider">
        <Swiper
          slidesPerView={slidesPerView}
          pagination={{
            clickable: true,
          }}
          spaceBetween={slideSpaceBetween}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5, 6, 7].map((article, idx) => (
            <SwiperSlide key={idx + "article"}>
              <ArticleCard article={article} />
            </SwiperSlide>
          ))}
          <div className="swiper__pagination">
            <div ref={navigationPrevRef}>
              <LeftArrowIcon />
            </div>
            <div ref={navigationNextRef}>
              <RightArrowIcon />
            </div>
          </div>
          {/* <p>Articles not found</p> */}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArticles;
