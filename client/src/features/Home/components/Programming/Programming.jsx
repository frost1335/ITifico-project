import React from "react";
import { programming1, programming2, programming3 } from "../../assets";

import "./Programming.scss";

const Programming = () => {
  return (
    <div className="container">
      <div className="programming">
        <h3 className="programming__title">Чому програмувати це круто</h3>
        <div className="programming__content">
          <div className="content__block">
            <img src={programming1} alt="block-img" className="block__img" />
            <h4 className="block__text">
              Ви можете реалізовувати свої ідеї за допомогою коду
            </h4>
          </div>
          <div className="content__block">
            <img src={programming2} alt="block-img" className="block__img" />
            <h4 className="block__text">Ви можете кодувати будь-де</h4>
          </div>
          <div className="content__block">
            <img src={programming3} alt="block-img" className="block__img" />
            <h4 className="block__text">Програмісти затребувані скрізь</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programming;
