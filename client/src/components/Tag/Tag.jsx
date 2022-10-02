import React from "react";

import "./Tag.scss";

const Tag = ({ tag, article, onClick, active }) => {
  return (
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
  );
};

export default Tag;
