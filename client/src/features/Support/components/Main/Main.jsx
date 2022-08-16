import React from "react";
import { FaHome } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import {
  buyCoffe,
  monobank,
  patreon,
  payPal,
  privat24,
  supportImg,
} from "../../assets";

import "./Main.scss";

const Main = () => {
  return (
    <div className="support__main">
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
              <Link to="/support" className="item__link">
                Підтримка
              </Link>
            </li>
          </ul>
        </div>
        <div className="main__content">
          <div className="content__left">
            <h1 className="left__title">courses</h1>
            <p className="left__description">
              Якщо вам сподобався цей проект, то ви можете зробити свій внесок у
              його підтримку та розвиток, перерахувавши будь-яку суму на один з
              таких реквізитів:
            </p>

            <div className="left__buttons">
              <Link to="#buy-me-coffe" className="button__link">
                <img src={buyCoffe} alt="buy-me-coffe-button" />
              </Link>
              <Link to="#pateron" className="button__link">
                <img src={patreon} alt="patreon-button" />
              </Link>
              <Link to="#privat24" className="button__link">
                <img src={privat24} alt="privat24-button" />
              </Link>
              <Link to="#monobank" className="button__link">
                <img src={monobank} alt="monobank-button" />
              </Link>
              <Link to="#pay-pal" className="button__link">
                <img src={payPal} alt="pay-pal-button" />
              </Link>
            </div>
          </div>
          <div className="content__right">
            <div className="right__img">
              <img src={supportImg} alt="support-right-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;