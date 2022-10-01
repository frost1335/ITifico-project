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
  Loader,
  RightArrowIcon,
} from "../../../../components";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  laptop2MaxWidth,
  mobileMaxWidth,
  slideSpaceBetween,
  slidesPerViewLaptop,
  slidesPerViewMobile,
  slidesPerViewTablet,
} from "../../../../constants";
import { useGetArticlesQuery } from "../../../../services/articleApi";

const NewArticles = () => {
  const { blogId } = useParams();
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState("");
  const { data: articleList, isLoading } = useGetArticlesQuery();
  const [articles, setArticles] = useState([]);

  const { t } = useTranslation();
  const [slidesPerView, setSlidesPerView] = useState(slidesPerViewLaptop);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    if (windowWidth > laptop2MaxWidth) setSlidesPerView(slidesPerViewLaptop);
    else if (windowWidth > mobileMaxWidth)
      setSlidesPerView(slidesPerViewTablet);
    else setSlidesPerView(slidesPerViewMobile);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useEffect(() => {
    if (!isLoading) {
      let arr = articleList?.data.slice(0, 7).filter((a) => a._id !== blogId);
      setArticles([...arr]);
    }
  }, [isLoading, articleList, blogId]);

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
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {articles.length ? (
                articles.map((article, idx) => (
                  <SwiperSlide key={idx + "article"}>
                    <ArticleCard article={article} />
                  </SwiperSlide>
                ))
              ) : (
                <p>Articles not found</p>
              )}
              <div className="swiper__pagination">
                <div ref={navigationPrevRef} onClick={onClickPrevButton}>
                  <LeftArrowIcon disabled={prevDisabled} />
                </div>
                <div ref={navigationNextRef} onClick={onClickNextButton}>
                  <RightArrowIcon disabled={nextDisabled} />
                </div>
              </div>
            </>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArticles;
