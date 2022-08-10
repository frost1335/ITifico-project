import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";

import "./ArticleCard.scss";

const ArticleCard = ({ article }) => {
  return (
    <div className="article__card" key={new Date() + article.title}>
      <div className="article__header">
        <img src={article.img} alt="article-img" />
      </div>
      <div className="article__body">
        <div className="body__tags">
          {article.tags.map((tag, i) => (
            <div className="tag" key={i + "tag"}>
              {tag}
            </div>
          ))}
        </div>
        <h4 className="article__title">
          <Link to={`/blog/123`}>{article.title}</Link>
        </h4>
        <p className="article__text">{article.text}</p>
      </div>
      <div className="article__footer">
        <h5 className="footer__date">
          <MdOutlineDateRange /> <span>{article.date}</span>
        </h5>
        <h5 className="footer__views">
          <IoMdEye /> <span>{article.views}</span>
        </h5>
      </div>
    </div>
  );
};

export default ArticleCard;
