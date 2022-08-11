import React from "react";
import { courseIcon } from "../../assets";
import { Link } from "react-router-dom";

import "./CourseCard.scss";

const CourseCard = () => {
  return (
    <div className="course__card">
      <div className="card__icon">
        <img src={courseIcon} alt="course-icon" />
      </div>
      <h3 className="card__title">C++ від нуля до героя</h3>
      <p className="card__text">
        Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте
        курси, вирішуйте завдання, переглядайте новини та ставайте справжніми
        майстрами програмування!
      </p>
      <div className="card__bottom">
        <Link to="/courses/view/123" className="course__detail">
          Детальніше
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
