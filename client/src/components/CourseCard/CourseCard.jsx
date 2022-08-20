import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./CourseCard.scss";

let startingText = 0;
let firstTextSub = 85;
let secondTextSub = 0;

const CourseCard = ({ course }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (windowWidth > 1697) {
      secondTextSub = 258;
    } else if (windowWidth > 1229) {
      secondTextSub = 180;
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="course__card">
      <div className="card__content" style={{ background: course.background }}>
        <div className="card__icon">
          <img src={course.icon} alt="course-icon" />
        </div>
        <h3 className="card__title">{course.title}</h3>
        <p className="card__text">
          {course.text.substring(startingText, firstTextSub)}
          <span className="text__dots">...</span>
          <span className="text__extra">
            {course.text.length > secondTextSub
              ? `${course.text.substring(firstTextSub, secondTextSub)}...`
              : course.text.substring(firstTextSub)}
          </span>
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
