import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./NewArticles.scss";

import { Pagination, Navigation } from "swiper";
import { article } from "../../assets";
import { ArticleCard } from "../../../../components";
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
  const [slidesPerView, setSlidesPerView] = useState(slidesPerViewLaptop);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [articles, setArticles] = useState([
    {
      img: article,
      tags: ["Frontend", "Tips", "C#"],
      title:
        "Наскільки ефективне навчання з дрібницями на утримання та результати",
      text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
      date: "5.05.2022",
      views: 48,
    },
    {
      img: article,
      tags: ["Frontend", "Tips", "C#"],
      title:
        "Наскільки ефективне навчання з дрібницями на утримання та результати",
      text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
      date: "5.05.2022",
      views: 48,
    },
    {
      img: article,
      tags: ["Frontend", "Tips", "C#"],
      title:
        "Наскільки ефективне навчання з дрібницями на утримання та результати",
      text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
      date: "5.05.2022",
      views: 48,
    },
    {
      img: article,
      tags: ["Frontend", "Tips", "C#"],
      title:
        "Наскільки ефективне навчання з дрібницями на утримання та результати",
      text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
      date: "5.05.2022",
      views: 48,
    },
    {
      img: article,
      tags: ["Frontend", "Tips", "C#"],
      title:
        "Наскільки ефективне навчання з дрібницями на утримання та результати",
      text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
      date: "5.05.2022",
      views: 48,
    },
    {
      img: article,
      tags: ["Frontend", "Tips", "C#"],
      title:
        "Наскільки ефективне навчання з дрібницями на утримання та результати",
      text: "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...",
      date: "5.05.2022",
      views: 48,
    },
  ]);

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
        <h2 className="header__title">Інші статті</h2>
        <Link to="/blog" className="header__button">
          Більше статей
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
          {articles.map((article, idx) => (
            <SwiperSlide key={idx + "article"}>
              <ArticleCard article={article} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default NewArticles;
