import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="navbar--logo" />
        </div>
        <div className="navbar__menu">
          <ul className="menu">
            <li className="menu__item">
              <Link to="/blog">Блог</Link>
            </li>
            <li className="menu__item">
              <Link to="/courses">Курси</Link>
            </li>
            <li className="menu__item">
              <Link to="/about">Про мене </Link>
            </li>
            <li className="menu__item">
              <Link to="/subscribe">Підписка на сайт</Link>
            </li>
            <li className="menu__item">
              <Link to="/support">Підтримка</Link>
            </li>
            <li className="menu__item menu__item--lng">
              <div className="item__lng">
                <button className="lng__button lng__button--active">UKR</button>
                <button className="lng__button">ENG</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
