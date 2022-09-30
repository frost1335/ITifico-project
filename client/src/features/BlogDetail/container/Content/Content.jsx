import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { HiArrowRight } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaHome } from "react-icons/fa";

import "./Content.scss";
import NewArticles from "../../components/NewArticles/NewArticles";
import {
  ImageBlock,
  LeftArrowIcon,
  Loader,
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
  viewVar,
} from "../../../../constants";
import {
  useGetArticleQuery,
  useGetArticlesQuery,
} from "../../../../services/articleApi";
import { useSelector } from "react-redux";
import { formatDate } from "../../../../utils/formatDate";

const Content = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { blogId } = useParams();
  const { data: article, isLoading } = useGetArticleQuery(blogId);
  const { data: articles, isLoading: articlesLoading } = useGetArticlesQuery();
  const { lng } = useSelector((state) => state.lngDetect);
  const [currentId, setCurrentId] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(500);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [headerLinkSub, setHeaderLinkSub] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (!articlesLoading) {
      articles?.data?.forEach((elem, index) => {
        if (elem._id === blogId) {
          setCurrentId(index);
        }
      });
    }
  }, [isLoading, articles, blogId]);

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

    setSliderWidth(document.querySelector(".content__main")?.clientWidth);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  const onSlideArticle = (side) => {
    if (currentId >= 0 && articles?.data?.length - 1 >= currentId) {
      if (side === "left" && currentId > 0) {
        setCurrentId((prev) => prev - 1);
        navigate(`/articles/view/${articles?.data?.[currentId - 1]._id}`);
      }
      if (side === "right" && articles?.data?.length - 1 > currentId) {
        setCurrentId((prev) => prev + 1);
        navigate(`/articles/view/${articles?.data?.[currentId + 1]._id}`);
      }
    }
  };

  if (isLoading) return <Loader />;

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
            <Link
              to={`/blog/view/${article?.data?._id}`}
              className="item__link "
            >
              {headerLinkSub
                ? `${article?.data?.[lng].title.substring(
                    headerLinkSub,
                    blogDetailHeaderNavbarLinkSub
                  )}...`
                : article?.data?.title}
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
            <h1 className="header__title">{article?.data?.[lng]?.title}</h1>
            <div className="header__info">
              <h5>
                <span>
                  <MdOutlineDateRange />
                </span>
                {formatDate(article?.data?.date)}
              </h5>
              <h5>
                <span>
                  <IoMdEye />
                </span>
                {article?.data?.views / viewVar}
              </h5>
            </div>
          </header>
          <div className="content__body">
            {article?.data?.[lng].fields.map((field, index) => {
              if (field.element === "text") {
                return <TextBlock data={field} key={index + "field"} />;
              } else if (field.element === "menu") {
                return <MenuBlock data={field} key={index + "field"} />;
              } else if (field.element === "images") {
                return (
                  <ImageBlock
                    data={field}
                    index={index}
                    component="article"
                    key={index + "field"}
                  />
                );
              } else if (field.element === "quote") {
                return <QuoteBlock data={field} key={index + "field"} />;
              } else {
                return <p>Loading</p>;
              }
            })}
          </div>
          <footer className="content__footer">
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
                <button
                  onClick={() => onSlideArticle("left")}
                  className="prev__button"
                >
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
                <button
                  onClick={() => onSlideArticle("right")}
                  className="next__button"
                >
                  <RightArrowIcon />
                </button>
              </div>
            </div>
            <div className="footer__articles"></div>
          </footer>
        </div>
        <div className="content__sidebar">
          <Sidebar />
        </div>
      </div>
      <div className="blog__slider" style={{ width: sliderWidth }}>
        {/* <NewArticles /> */}
      </div>
    </div>
  );
};

export default Content;
