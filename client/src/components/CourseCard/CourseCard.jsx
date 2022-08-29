import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  courseCardFirstTextSub,
  courseCardFirstTextSub2,
  courseCardSecondTextSub,
  courseCardSecondTextSub2,
  courseCardStartingText,
  laptopMaxWidth,
  tabletMaxWidth,
} from "../../constants";

import "./CourseCard.scss";

let startingText = courseCardStartingText;
let firstTextSub = courseCardFirstTextSub;
let secondTextSub = courseCardSecondTextSub;

const CourseCard = ({ course }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (windowWidth > laptopMaxWidth) {
      secondTextSub = courseCardFirstTextSub2;
    } else if (windowWidth > tabletMaxWidth) {
      secondTextSub = courseCardSecondTextSub2;
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
          <span className="text__dots">...</span>{" "}
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
