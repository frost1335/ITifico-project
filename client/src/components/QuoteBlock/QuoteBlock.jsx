import React from "react";
import { quoteIcon } from "../../assets";

import "./QuoteBlock.scss";

const QuoteBlock = () => {
  return (
    <div className="quote__block">
      <div className="quto__icon">
        <img src={quoteIcon} alt="quote-icon-img" className="icon" />
      </div>
      <div className="quote__content">
        <div className="quote__name">Звенигород Станіславський</div>
        <p className="quote__text">
          Ідейні міркування вищого порядку, а також подальший розвиток різних
          форм діяльності забезпечує широкому колу (фахівців) участь у
          формуванні позицій, займаних{" "}
        </p>
      </div>
    </div>
  );
};

export default QuoteBlock;
