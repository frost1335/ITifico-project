import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { articleImg } from "../../assets";
import { articleCardStartingSub, articleCardSubstring } from "../../constants";
import { formatDate } from "../../utils/formatDate";

import "./ArticleCard.scss";

const lng = localStorage.getItem("i18nextLng") || "en";

const ArticleCard = ({ article }) => {
  const [articleTags, setArticleTags] = useState([
    "Frontend",
    "Backend",
    "JavaScript",
  ]);

  return (
    <div className="article__card" key={new Date() + article}>
      <div className="article__header">
        <img src={articleImg} alt="article-img" />
      </div>
      <div className="article__body">
        <div className="body__tags">
          {articleTags.map((tag, i) => (
            <div className="tag" key={i + "tag"}>
              {tag}
            </div>
          ))}
        </div>
        <h4 className="article__title">
          <Link to={`/blog/view/123`}>
            Наскільки ефективне навчання з дрібницями на утримання та результати
          </Link>
        </h4>
        <p className="article__text">
          {"Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ..."
            .length > articleCardSubstring
            ? `${"Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ...".substring(
                articleCardStartingSub,
                articleCardSubstring
              )}...`
            : "Питання максимізації уваги учнів і збільшення залученості переслідують вчителів на всіх рівнях шкільної ..."}
        </p>
      </div>
      <div className="article__footer">
        <h5 className="footer__date">
          <MdOutlineDateRange />{" "}
          <span>{formatDate("2022-08-30T08:23:04.973Z")}</span>
        </h5>
        <h5 className="footer__views">
          <IoMdEye /> <span>{13}</span>
        </h5>
      </div>
    </div>
  );
};

export default ArticleCard;
