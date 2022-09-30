import React from "react";
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
  const location = useLocation();
  const { changeLng } = useAction();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileNav, setMobileNav] = React.useState(false);
  const [collapseNav, setCollapseNav] = useState(false);
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

  const handleMobileNav = (nav) => {
    setCollapseNav(nav);
    if (nav) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "unset";
    }
  };

  return (
    <div className="container">
      {mobileNav ? (
        <div className="navbar__mobile">
          <div className="navbar__logo" onClick={() => handleMobileNav(false)}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="item__lng">
            {Object.keys(lngs).map((lng, idx) => (
              <button
                onClick={() => i18n.changeLanguage(lng)}
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
                      onClick={() => {
                        changeLng(lng);
                        i18n.changeLanguage(lng);
                      }}
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
        className={`navbar__mobile--modal  ${collapseNav ? "open" : "closed"}`}
      >
        <div className="modal__header">
          <div className="navbar__logo" onClick={() => handleMobileNav(false)}>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="item__lng">
            {Object.keys(lngs).map((lng, idx) => (
              <button
                onClick={() => i18n.changeLanguage(lng)}
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
              <Link to="#linkedin">Linkedin</Link>
            </li>
            <li className="menu__item">
              <Link to="#telegram">Telegram</Link>
            </li>
            <li className="menu__item">
              <Link to="#gmail">Gmail</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
