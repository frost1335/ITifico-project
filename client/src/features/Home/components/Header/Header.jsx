import React from "react";
import { arrow, mouse } from "../../assets";
import { Link } from "react-router-dom";
import "./Header.scss";
import HeaderImg from "../AnimationImages/HeaderImg/HeaderImg";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [headerText, setHeaderText] = useState();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth >= 1698) {
      setHeaderText(
        "Курси для початківців і просунутих програмістів, а також цікаві статті. Приєднуйтесь і дозвольте нам підтримати вас у вашій кар’єрі"
      );
    } else {
      setHeaderText(
        "Курси для початківців і просунутих програмістів, а також цікаві статті. "
      );
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  console.log(windowWidth);

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left">
            <div className="header__banner">
              <h1 className="banner__text">ITifico</h1>
            </div>
            <h1 className="left__title">
              <span>ITifico</span> — платформа для вашого вивчення коду
            </h1>
            <p className="left__text">{headerText}</p>
            <div className="left__bottom">
              <Link className="left__button" to="/action">
                Call to action <img src={arrow} alt="button-arrow" />
              </Link>
              <div className="scroll__content">
                <img src={mouse} alt="scroll--mouse" />
                <h4 className="content__text">Гортай вниз</h4>
              </div>
            </div>
          </div>
          <div className="header__right">
            <div className="right__img">
              <HeaderImg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
