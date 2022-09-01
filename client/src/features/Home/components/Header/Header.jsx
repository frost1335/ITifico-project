import React, { useEffect, useState } from "react";
import { arrow, mouse } from "../../assets";
import HeaderImg from "../AnimationImages/HeaderImg/HeaderImg";
import { useTranslation, Trans } from "react-i18next";

import { homeHeaderSubstring, tabletMaxWidth } from "../../../../constants";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  const { t } = useTranslation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [headerText, setHeaderText] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (windowWidth >= tabletMaxWidth) {
      setHeaderText(t("home_main_description"));
    } else {
      setHeaderText(
        t("home_main_description").substring(0, homeHeaderSubstring)
      );
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, t]);

  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="header__left">
            <div className="header__banner">
              <h1 className="banner__text">ITifico</h1>
            </div>
            <h1 className="left__title">
              <Trans i18nKey="home_main_title">
                <strong>ITifico</strong> — платформа для вашого вивчення коду
              </Trans>
            </h1>
            <p className="left__text">{headerText}</p>
            <div className="left__bottom">
              <Link className="left__button" to="/action">
                {t("home_main_button")} <img src={arrow} alt="button-arrow" />
              </Link>
              <div className="scroll__content">
                <img src={mouse} alt="scroll--mouse" />
                <h4 className="content__text">{t("home_main_span_text")}</h4>
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
