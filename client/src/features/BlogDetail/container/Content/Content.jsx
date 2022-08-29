import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaHome } from "react-icons/fa";
import { imageBlockHead, imageBlockImg, socialButton } from "../../assets";

import "./Content.scss";
import NewArticles from "../../components/NewArticles/NewArticles";
import {
  ImageBlock,
  LeftArrowIcon,
  MenuBlock,
  QuoteBlock,
  RightArrowIcon,
  TextBlock,
} from "../../../../components";
import { useEffect } from "react";
import { useState } from "react";
import { mobileMaxWidth } from "../../../../constants";

const Content = () => {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [headerLinkSub, setHeaderLinkSub] = useState(false);
  const images1 = [{ img: imageBlockHead }];
  const images2 = [
    { img: imageBlockImg, text: "1/25 Коментар до зображення" },
    { img: imageBlockImg, text: "1/25 Коментар до зображення" },
  ];
  const images3 = [
    { img: imageBlockImg, text: "1/25 Коментар до зображення" },
    { img: imageBlockImg, text: "1/25 Коментар до зображення" },
    { img: imageBlockImg, text: "1/25 Коментар до зображення" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth > mobileMaxWidth) {
      setHeaderLinkSub(false);
    } else {
      setHeaderLinkSub(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  console.log(headerLinkSub);

  return (
    <div className="container">
      <div className="header__navbar--layout">
        <div className="navbar__icon">
          <FaHome />
        </div>
        <ul className="navbar__menu">
          <li className="menu__item">
            <Link to="/" className="item__link">
              {t("header_nav_home")}
            </Link>
          </li>
          <li className="menu__item">
            <span className="item_arrow">
              <HiArrowRight />
            </span>
            <Link to="/blog" className="item__link">
              {t("header_nav_blog")}
            </Link>
          </li>
          <li className="menu__item menu__item--active">
            <span className="item_arrow">
              <HiArrowRight />
            </span>
            <Link to={`/blog/view/123`} className="item__link ">
              {headerLinkSub
                ? `${"Наскільки ефективне навчання з дрібницями на утримання та результати".substring(
                    0,
                    20
                  )}...`
                : "Наскільки ефективне навчання з дрібницями на утримання та результати"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="blog__content">
        <div className="header__banner">
          <h1 className="banner__text">blog</h1>
        </div>
        <div className="content__main">
          <header className="content__header">
            <h1 className="header__title">
              Наскільки ефективне навчання з дрібницями на утримання та
              результати
            </h1>
            <div className="header__info">
              <h5>
                <span>
                  <MdOutlineDateRange />
                </span>
                16.01.2020
              </h5>
              <h5>
                <span>
                  <IoMdEye />
                </span>
                48
              </h5>
            </div>
          </header>
          <div className="content__body">
            <ImageBlock images={images1} />
            <MenuBlock />
            <TextBlock />
            <MenuBlock />
            <ImageBlock images={images2} />
            <TextBlock />
            <ImageBlock images={images3} />
            <TextBlock />
            <QuoteBlock />
            <TextBlock />
          </div>
          <footer className="content__footer">
            <div className="footer__social">
              <div className="social__left">
                <h6 className="left__text">{t("blogdetail_footer_share")}</h6>
                <div className="social__icons">
                  <Link to="#facebook" className="icon__box">
                    <FaFacebookF />
                  </Link>
                  <Link to="#twitter" className="icon__box">
                    <FaTwitter />
                  </Link>
                  <Link to="#linkedin" className="icon__box">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
              <div className="social__right">
                <Link
                  to="#buycoffe"
                  className="right__button"
                  style={{ background: `url(${socialButton})` }}
                />
              </div>
            </div>
            <div className="slide__article">
              <div className="slide__box">
                <button className="prev__button">
                  <LeftArrowIcon />
                </button>
                <p className="box__text">
                  {t("blogdetail_footer_prevarticle")}
                </p>
              </div>
              <div className="slide__box">
                <p className="box__text">
                  {t("blogdetail_footer_nextarticle")}
                </p>
                <button className="next__button">
                  <RightArrowIcon />
                </button>
              </div>
            </div>
            <div className="footer__articles">
              <NewArticles />
            </div>
          </footer>
        </div>
        <div className="content__sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Content;
