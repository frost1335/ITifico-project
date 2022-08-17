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
      background: "#C2E0FF",
    },
    {
      icon: courseIcon,
      title: "JS від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      background: "#FFF7B9",
    },
    {
      icon: courseIcon,
      title: "C# від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      background: "#CCC1F6",
    },
    {
      icon: courseIcon,
      title: "C# від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      background: "#CCC1F6",
    },
    {
      icon: courseIcon,
      title: "JS від нуля до героя",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      background: "#FFF7B9",
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
      background: "#C2E0FF",
    },
    {
      icon: courseIcon,
      title: "JS від нуля до героя",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      background: "#FFF7B9",
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
      background: "#C2E0FF",
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
          <div className="header__banner">
            <h1 className="banner__text">courses</h1>
          </div>
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
