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

const NewArticles = () => {
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
          slidesPerView={3}
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
    </div>
  );
};

export default NewArticles;
