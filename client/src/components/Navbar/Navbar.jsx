import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import "./Navbar.scss";
import { useEffect } from "react";
import { useState } from "react";
import { mobileMaxWidth } from "../../constants";
import Logo from "./../Logo/Logo";
import { useAction } from "../../hooks/actions";

const lngs = {
  uk: { nativeName: "UKR" },
  en: { nativeName: "ENG" },
};

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const navbar = useRef(null);
  const location = useLocation();
  const { changeLng } = useAction();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileNav, setMobileNav] = React.useState(false);
  const [collapseNav, setCollapseNav] = useState(false);
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth > mobileMaxWidth) {
      setMobileNav(false);
    } else {
      setMobileNav(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > navbar.current.clientHeight) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleMobileNav = (nav) => {
    setCollapseNav(nav);
    if (nav) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "unset";
    }
  };

  const onChangeLang = (lng) => {
    i18n.changeLanguage(lng);
    changeLng(lng);
  };

  return (
    <div className={`nav__box ${fix ? " fixed" : ""}`} ref={navbar}>
      <div className={`container`}>
        {mobileNav ? (
          <div className="navbar__mobile">
            <div
              className="navbar__logo"
              onClick={() => handleMobileNav(false)}
            >
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="item__lng">
              {Object.keys(lngs).map((lng, idx) => (
                <button
                  onClick={() => onChangeLang(lng)}
                  className={`lng__button${
                    i18n.resolvedLanguage === lng ? " lng__button--active" : ""
                  }`}
                  disabled={i18n.resolvedLanguage === lng}
                  key={idx + lng}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
            <div
              className="navbar__collapse"
              onClick={() => handleMobileNav(true)}
            >
              <FaBars className="collapse__icon" />
            </div>
          </div>
        ) : (
          <div className="navbar">
            <div className="navbar__logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="navbar__menu">
              <ul className="menu">
                <li className="menu__item">
                  <Link to="/blog">{t("navbar_link_blog")}</Link>
                </li>
                <li className="menu__item">
                  <Link to="/courses">{t("navbar_link_courses")}</Link>
                </li>
                <li className="menu__item">
                  <Link to="/about">{t("navbar_link_about")}</Link>
                </li>
                <li className="menu__item">
                  <Link to="/" state={"subscribe"}>
                    {t("navbar_link_subscription")}
                  </Link>
                </li>
                <li className="menu__item">
                  <Link to="/donation">{t("navbar_link_donation")}</Link>
                </li>
                <li className="menu__item menu__item--lng">
                  <div className="item__lng">
                    {Object.keys(lngs).map((lng, idx) => (
                      <button
                        onClick={() => onChangeLang(lng)}
                        className={`lng__button${
                          i18n.resolvedLanguage === lng
                            ? " lng__button--active"
                            : ""
                        }`}
                        disabled={i18n.resolvedLanguage === lng}
                        key={idx + lng}
                      >
                        {lngs[lng].nativeName}
                      </button>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div
          className={`modal__background ${collapseNav ? "open" : "closed"}`}
          onClick={() => handleMobileNav(false)}
        />
        <div
          className={`navbar__mobile--modal  ${
            collapseNav ? "open" : "closed"
          }`}
        >
          <div className="modal__header">
            <div
              className="navbar__logo"
              onClick={() => handleMobileNav(false)}
            >
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="item__lng">
              {Object.keys(lngs).map((lng, idx) => (
                <button
                  onClick={() => onChangeLang(lng)}
                  className={`lng__button${
                    i18n.resolvedLanguage === lng ? " lng__button--active" : ""
                  }`}
                  disabled={i18n.resolvedLanguage === lng}
                  key={idx + lng}
                >
                  {lngs[lng].nativeName}
                </button>
              ))}
            </div>
            <div
              className="navbar__collapse"
              onClick={() => handleMobileNav(false)}
            >
              <MdClose className="collapse__icon" />
            </div>
          </div>
          <div className="modal__body">
            <ul className="body__menu">
              <li
                className={`menu_item ${
                  location.pathname === "/blog" ? "active" : ""
                }`}
                onClick={() => handleMobileNav(false)}
              >
                <Link to="/blog">{t("navbar_link_blog")}</Link>
              </li>
              <li
                className={`menu_item ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                onClick={() => handleMobileNav(false)}
              >
                <Link to="/about">{t("navbar_link_about")}</Link>
              </li>
              <li
                className={`menu_item ${
                  location.pathname === "/courses" ? "active" : ""
                }`}
                onClick={() => handleMobileNav(false)}
              >
                <Link to="/courses">{t("navbar_link_courses")}</Link>
              </li>
              <li
                className={`menu_item ${
                  location.state === "subscribe" ? "active" : ""
                }`}
                onClick={() => handleMobileNav(false)}
              >
                <Link to="/" state={"subscribe"}>
                  {t("navbar_link_subscription")}
                </Link>
              </li>
              <li
                className={`menu_item ${
                  location.pathname === "/donation" ? "active" : ""
                }`}
                onClick={() => handleMobileNav(false)}
              >
                <Link to="/donation">{t("navbar_link_donation")}</Link>
              </li>
            </ul>
          </div>
          <div className="modal__footer">
            <ul className="footer__menu">
              <li className="menu__item">
                <a
                  href="https://www.linkedin.com/in/stanislav-zghurskyi-859288158/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Linkedin
                </a>
              </li>
              <li className="menu__item">
                <a href="https://t.me/stasoz" target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </li>
              <li className="menu__item">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=truestasoz@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Gmail
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
