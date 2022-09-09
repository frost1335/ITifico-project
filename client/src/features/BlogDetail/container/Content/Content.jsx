import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaHome } from "react-icons/fa";
import { imageBlockHead, imageBlockImg } from "../../assets";

import "./Content.scss";
import NewArticles from "../../components/NewArticles/NewArticles";
import {
  ImageBlock,
  LeftArrowIcon,
  MenuBlock,
  QuoteBlock,
  RightArrowIcon,
  SocialButton,
  TextBlock,
} from "../../../../components";
import { useEffect } from "react";
import { useState } from "react";
import {
  blogDetailHeaderNavbarLinkSub,
  mobileMaxWidth,
} from "../../../../constants";

const Content = () => {
  const { t } = useTranslation();

  const [sliderWidth, setSliderWidth] = useState(500);
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

    setSliderWidth(document.querySelector(".content__main").clientWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

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
                    headerLinkSub,
                    blogDetailHeaderNavbarLinkSub
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
        <div className="content__main_info">
          <div className="content__main">
            <div className="content__header">
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
            </div>
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
            <div className="content__footer">
              <div className="footer__social">
                <div className="social__left">
                  <h6 className="left__text">{t("blogdetail_footer_share")}</h6>
                  <div className="social__icons">
                    <Link to="#facebook" key="1" className="icon__box">
                      <FaFacebookF />
                    </Link>
                    <Link to="#twitter" key="2" className="icon__box">
                      <FaTwitter />
                    </Link>
                    <Link to="#linkedin" key="3" className="icon__box">
                      <FaLinkedinIn />
                    </Link>
                  </div>
                </div>
                <div className="social__right">
                  <Link to="#buycoffe" className="right__button">
                    <SocialButton />
                  </Link>
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
              <div className="footer__articles"></div>
            </div>
          </div>
        </div>
        <div className="content__sidebar">
          <Sidebar />
        </div>
      </div>
      <div className="blog__slider" style={{ width: sliderWidth }}>
        <NewArticles />
      </div>
    </div>
  );
};

export default Content;
