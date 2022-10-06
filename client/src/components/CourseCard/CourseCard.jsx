import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  courseCardFirstTextSub,
  courseCardFirstTextSub2,
  courseCardSecondTextSub2,
  courseCardStartingText,
  laptopMaxWidth,
  tabletMaxWidth,
} from "../../constants";

import "./CourseCard.scss";

let startingText = courseCardStartingText;
let firstTextSub = courseCardFirstTextSub;
let secondTextSub = courseCardSecondTextSub2;

const CourseCard = ({ course }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { lng } = useSelector((state) => state.lngDetect);

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
      <div className="card__content" style={{ background: course?.background }}>
        <div className="card__icon">
          <img
            src={process.env.REACT_APP_BASE_URL + "/Uploads/" + course?.icon}
            alt="course-icon"
          />
        </div>
        <h3 className="card__title">{course?.[lng]?.title}</h3>
        <p className="card__text">
          {course[lng]?.description.substring(startingText, firstTextSub)}
          <span className="text__dots">...</span>
          <span className="text__extra">
            {course[lng]?.description?.length > secondTextSub
              ? `${course[lng]?.description?.substring(
                  firstTextSub,
                  secondTextSub
                )}...`
              : course[lng]?.description?.substring(firstTextSub)}
          </span>
        </p>
        <div className="card__bottom">
          <Link to={`/courses/view/${course._id}`} className="course__detail">
            Детальніше
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
