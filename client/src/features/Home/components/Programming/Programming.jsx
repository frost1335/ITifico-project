import React from "react";
import ProgrammingImg1 from "../AnimationImages/ProgrammingImg1/ProgrammingImg1";
import ProgrammingImg2 from "../AnimationImages/ProgrammingImg2/ProgrammingImg2";
import ProgrammingImg3 from "../AnimationImages/ProgrammingImg3/ProgrammingImg3";

import "./Programming.scss";

const Programming = () => {
  return (
    <div className="container">
      <div className="programming">
        <h3 className="programming__title">Чому програмувати це круто</h3>
        <div className="programming__content">
          <div className="content__block">
            <ProgrammingImg1 />
            <h4 className="block__text">
              Ви можете реалізувати свої ідеї за допомогою коду в кілька рядків
            </h4>
          </div>
          <div className="content__block">
            <ProgrammingImg2 />
            <h4 className="block__text">Ви можете кодувати будь-де</h4>
          </div>
          <div className="content__block">
            <ProgrammingImg3 />
            <h4 className="block__text">Програмісти затребувані скрізь</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programming;
