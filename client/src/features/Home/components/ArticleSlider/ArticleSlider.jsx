import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ArticleSlider.scss";

import { Pagination, Navigation } from "swiper";
import { article } from "../../assets";
import { ArticleCard } from "../../../../components";
import { useEffect } from "react";

const ArticleSlider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [slidesPerView, setSlidesPerView] = useState(4);

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
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth > 1229) {
      setSlidesPerView(4);
    } else {
      setSlidesPerView(2);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="articleslider">
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
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
  );
};

export default ArticleSlider;
