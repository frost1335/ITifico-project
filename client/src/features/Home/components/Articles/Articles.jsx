import React from "react";
import { Link } from "react-router-dom";
import { articleBg } from "../../assets";
import ArticleSlider from "../ArticleSlider/ArticleSlider";
import "./Articles.scss";

const Articles = () => {
  return (
    <div className="articles">
      <div className="container">
        <div className="article__content">
          <div className="content__bg">
            <img src={articleBg} alt="article-bg-img" />
          </div>
          <header className="content__header">
            <h3 className="header__title">Статті</h3>
            <Link to="/articles" className="header__more">
              Більше статей
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
