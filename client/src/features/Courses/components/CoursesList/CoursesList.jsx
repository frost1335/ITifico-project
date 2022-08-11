import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { courseIcon } from "../../../../assets";
import { CourseCard } from "../../../../components";

import "./CoursesList.scss";

const CoursesList = () => {
  const [courses, setCourses] = useState([
    {
      icon: courseIcon,
      title: "C++ від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      background: "#FFB6B6",
    },
    {
      icon: courseIcon,
      title: "C++ від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      background: "#FFB6B6",
    },
    {
      icon: courseIcon,
      title: "C++ від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      background: "#FFB6B6",
    },
    {
      icon: courseIcon,
      title: "C++ від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      background: "#FFB6B6",
    },
    {
      icon: courseIcon,
      title: "C++ від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      background: "#FFB6B6",
    },
    {
      icon: courseIcon,
      title: "C++ від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      background: "#FFB6B6",
    },
  ]);

  return (
    <div className="courses__list">
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
            <li className="menu__item menu__item--active">
              <span className="item_arrow">
                <HiArrowRight />
              </span>
              <Link to="/courses" className="item__link">
                Курси
              </Link>
            </li>
          </ul>
        </div>
        <div className="list__content">
          <div className="list__header">
            <h1 className="header__title">Курси</h1>
          </div>
          <div className="list__menu">
            {courses.length ? (
              courses.map((course, index) => (
                <CourseCard key={index + "course"} course={course} />
              ))
            ) : (
              <p>Course not found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
