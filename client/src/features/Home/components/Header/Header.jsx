import React from "react";
import { arrow, headerBg, headerTag, mouse } from "../../assets";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left">
            <img
              src={headerTag}
              alt="header-tag"
              className="left__header--tag"
            />
            <h1 className="left__title">
              <span>ITifico</span> — платформа для вашого вивчення коду
            </h1>
            <p className="left__text">
              Курси для початківців і просунутих програмістів, а також цікаві
              статті. Приєднуйтесь і дозвольте нам підтримати вас у вашій
              кар’єрі
            </p>
            <Link className="left__button" to="/action">
              Call to action <img src={arrow} alt="button-arrow" />
            </Link>
            <div className="scroll__content">
              <img src={mouse} alt="scroll--mouse" />
              <h4 className="content__text">Гортай вниз</h4>
            </div>
          </div>
          <div className="header__right">
            <img src={headerBg} alt="header-bg" className="right__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
