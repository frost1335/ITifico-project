import React from "react";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { defaultImg } from "../../assets";
import {
  articleCardStartingSub,
  articleCardSubstring,
  viewVar,
} from "../../constants";
import { useImgExsist } from "../../hooks/useImgExsist";
import { formatDate } from "../../utils/formatDate";
import Tag from "../Tag/Tag";

import "./ArticleCard.scss";

const ArticleCard = ({ article }) => {
  const { lng } = useSelector((state) => state.lngDetect);
  const imgExsist = useImgExsist(article?.image);

  return (
    <div className="article__card" key={new Date() + article}>
      <div className="article__header">
        <img
          src={
            imgExsist
              ? process.env.REACT_APP_BASE_URL + `/Uploads/${article?.image}`
              : defaultImg
          }
          alt="article-img"
        />
      </div>
      <div className="article__body">
        <div className="body__tags">
          {article.tags.map((tag, i) => (
            <Tag article tag={tag} key={"tag" + i} />
          ))}
        </div>
        <h4 className="article__title">
          <Link to={`/blog/view/${article?._id}`}>{article?.[lng]?.title}</Link>
        </h4>
        <p className="article__text">
          {article?.[lng]?.description?.length > articleCardSubstring
            ? `${article?.[lng]?.description.substring(
                articleCardStartingSub,
                articleCardSubstring
              )}...`
            : article?.[lng]?.description}
        </p>
      </div>
      <div className="article__footer">
        <h5 className="footer__date">
          <MdOutlineDateRange /> <span>{formatDate(article?.date)}</span>
        </h5>
        <h5 className="footer__views">
          <IoMdEye /> <span>{Math.floor(article?.views / viewVar)}</span>
        </h5>
      </div>
    </div>
  );
};

export default ArticleCard;
