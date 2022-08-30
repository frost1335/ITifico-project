import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NewArticles.scss";

import { Pagination, Navigation } from "swiper";
import { article } from "../../assets";
import { ArticleCard, Loader } from "../../../../components";
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
import { useGetArticlesQuery } from "../../../../services/articleApi";

const NewArticles = () => {
  const { t } = useTranslation();

  const { data: articlesList, isLoading, isError } = useGetArticlesQuery();
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
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {isLoading || isError ? (
            <Loader />
          ) : articlesList?.data.length ? (
            articlesList?.data.map((article, idx) => (
              <SwiperSlide key={idx + "article"}>
                <ArticleCard article={article} />
              </SwiperSlide>
            ))
          ) : (
            <p>Articles not found</p>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArticles;
