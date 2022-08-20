import React from "react";
import { FaHome } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AboutImg } from "../../assets";

import "./Main.scss";

const Main = () => {
  return (
    <div className="about__main">
      <div className="container">
        <div className="header__navbar--layout">
          <div className="navbar__icon">
            <FaHome />
          </div>
          <ul className="navbar__menu">
            <li className="menu__item">
              <Link to="/" className="item__link">
                Головна
              </Link>
            </li>
            <li className="menu__item menu__item--active">
              <span className="item_arrow">
                <HiArrowRight />
              </span>
              <Link to="/about" className="item__link">
                Про мене
              </Link>
            </li>
          </ul>
        </div>
        <div className="main__content">
          <div className="header__banner">
            <h1 className="banner__text">about</h1>
          </div>
          <div className="content__left">
            <h1 className="main__title">Про мене</h1>
            <p className="left__text">
              Привіт! Я Стас. Я розробник повного стека більше 5 років. За час
              свого розвитку я написав багато статей і записав відеопорад для
              новачків і професіоналів. Я отримав багато позитивних відгуків,
              але розумію, що цього недостатньо для початку.
            </p>
            <p className="left__text">
              Багато молодих людей регулярно запитують мене, що я повинен
              спочатку вчитися, щоб стати розробником.
              <span className="left__text">
                Ви хочете мати чітке та покрокове керівництво, які теми слід
                вивчити в першу чергу. Тож цей сайт із курсами та статтями
                розроблено для вас!
              </span>
            </p>
            <p className="left__text">
              Крім того, я надаю персональні консультації та навчання,
              <span className="text--outlined">
                зв’яжіться зі мною, якщо ви хочете покращити свої навички
                програмування:
              </span>
            </p>
          </div>
          <div className="content__right">
            <div className="right__img">
              <img src={AboutImg} alt="about-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
