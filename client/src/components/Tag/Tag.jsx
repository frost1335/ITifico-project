import React from "react";
import { Link } from "react-router-dom";

import "./Tag.scss";

const Tag = ({ tag, article, onClick, active, blog }) => {
  return blog || article ? (
    <div
      className={`tag__content ${article && "tag__content--article"} ${
        active && " tag__active"
      }`}
      onClick={onClick}
      style={{
        background: active ? "transparent" : tag.background,
        border: active && `2px solid ${tag.background}`,
      }}
    >
      {tag.name}
    </div>
  ) : (
    <Link to={`/blog`} className="tag__link" state={{ tag: tag.name }}>
      <div
        className={`tag__content ${article && "tag__content--article"} ${
          active && " tag__active"
        }`}
        onClick={onClick}
        style={{
          background: active ? "transparent" : tag.background,
          border: active && `2px solid ${tag.background}`,
        }}
      >
        {tag.name}
      </div>
    </Link>
  );
};

export default Tag;
