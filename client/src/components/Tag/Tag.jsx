import React from "react";
import { tagColors } from "../../constants";

import "./Tag.scss";

const Tag = ({ tag, article }) => {
  const color = tagColors[Math.floor(Math.random() * tagColors.length)];

  return (
    <div
      className={`tag__content ${article && "tag__content--article"}`}
      style={{ background: color }}
    >
      {tag.name}
    </div>
  );
};

export default Tag;
