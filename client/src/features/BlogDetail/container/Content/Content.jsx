import React from "react";
import ImageBlock from "../../components/ImageBlock/ImageBlock";
import MenuBlock from "../../components/MenuBlock/MenuBlock";
import QuoteBlock from "../../components/QuoteBlock/QuoteBlock";
import TextBlock from "../../components/TextBlock/TextBlock";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

import { IoMdEye } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { imageBlockHead, imageBlockImg, socialButton } from "../../assets";

import "./Content.scss";
import NewArticles from "../../components/NewArticles/NewArticles";

const Content = () => {
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

  return (
    <div className="container">
      <div className="content">
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
                <h6 className="left__text">Поділитися:</h6>
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
                <button className="prev__button" />
                <p className="box__text">Попередня стаття</p>
              </div>
              <div className="slide__box">
                <p className="box__text">Наступна стаття</p>
                <button className="next__button" />
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
