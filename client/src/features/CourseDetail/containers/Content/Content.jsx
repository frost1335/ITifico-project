import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ImageBlock, MenuBlock, TextBlock } from "../../../../components";
import { imageBlockHead, imageBlockImg } from "../../assets";
import Sidebar from "../../components/Sidebar/Sidebar";
import Practise from "../Practise/Practise";

import "./Content.scss";

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

const Content = () => {
  const [course, setCourse] = useState([{}]);

  return (
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
          <li className="menu__item">
            <span className="item_arrow">
              <HiArrowRight />
            </span>
            <Link to="/courses" className="item__link">
              Курси
            </Link>
          </li>
          <li className="menu__item menu__item--active">
            <span className="item_arrow">
              <HiArrowRight />
            </span>
            <Link to={`/blog/view/123`} className="item__link ">
              C# від нуля до героя
            </Link>
          </li>
        </ul>
      </div>
      <div className="course__content">
        <div className="content__sidebar">
          <Sidebar />
        </div>
        <div className="content__main">
          <header className="content__header">
            <div className="header__title">
              <h3 className="title--small">Класи, структури та об'єкти</h3>
              <h1 className="title--main">
                Область застосування (контекст) змінної
              </h1>
            </div>
            <div className="header__rating">3.9</div>
          </header>
          <div className="main__body">
            <ImageBlock images={images1} />
            <MenuBlock />
            <TextBlock />
            <MenuBlock />
            <ImageBlock images={images2} />
            <TextBlock />
            <ImageBlock images={images3} />
            <TextBlock />
          </div>
          <div className="slide__lesson">
            <div className="slide__box">
              <button className="prev__button" />
              <p className="box__text">Попередній курс</p>
            </div>
            <div className="slide__box">
              <p className="box__text">Наступний курс</p>
              <button className="next__button" />
            </div>
          </div>
          <div className="content__practise">
            <Practise />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
