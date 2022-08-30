import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router-dom";
import { articleImg } from "../../assets";
import { formatDate } from "../../utils/formatDate";

import "./ArticleCard.scss";

const lng = localStorage.getItem("i18nextLng") || "en";

const ArticleCard = ({ article }) => {
  return (
    <div className="article__card" key={new Date() + article[lng].title}>
      <div className="article__header">
        <img src={articleImg} alt="article-img" />
      </div>
      <div className="article__body">
        <div className="body__tags">
          {article[lng].tags.map((tag, i) => (
            <div className="tag" key={i + "tag"}>
              {tag}
            </div>
          ))}
        </div>
        <h4 className="article__title">
          <Link to={`/blog/view/${article._id}`}>{article[lng].title}</Link>
        </h4>
        <p className="article__text">
          {article[lng].description > 100
            ? `${article[lng].description.substring(0, 100)}...`
            : article[lng].description}
        </p>
      </div>
      <div className="article__footer">
        <h5 className="footer__date">
          <MdOutlineDateRange /> <span>{formatDate(article[lng].date)}</span>
        </h5>
        <h5 className="footer__views">
          <IoMdEye /> <span>{article[lng].views}</span>
        </h5>
      </div>
    </div>
  );
};

export default ArticleCard;
