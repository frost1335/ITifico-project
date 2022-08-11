import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./CourseCard.scss";

const CourseCard = ({ course }) => {
  return (
    <div className="course__card">
      <div className="card__content" style={{ background: course.background }}>
        <div className="card__icon">
          <img src={course.icon} alt="course-icon" />
        </div>
        <h3 className="card__title">{course.title}</h3>
        <p className="card__text">
          {course.text.substring(0, 80)}<span className="text__dots">...</span>
          <span className="text__extra">{course.text.substring(80)} </span>
        </p>
        <div className="card__bottom">
          <Link to={`/courses/view/${course.title}`} className="course__detail">
            Детальніше
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
