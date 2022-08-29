import React from "react";
import { Link } from "react-router-dom";
import { articleBg } from "../../assets";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import { useTranslation } from "react-i18next";

import "./Articles.scss";

const Articles = () => {
  const { t } = useTranslation();

  return (
    <div className="articles">
      <div className="container">
        <div className="article__content">
          <div className="content__bg">
            <img src={articleBg} alt="article-bg-img" />
          </div>
          <header className="content__header">
            <h3 className="header__title">{t("home_articles_title")}</h3>
            <Link to="/blog" className="header__more">
              {t("home_courses_button")}
            </Link>
          </header>
          <div className="article__slider">
            <ArticleSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
