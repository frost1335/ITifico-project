import React from "react";
import { Link } from "react-router-dom";
import { courseBg1, courseBg2 } from "../../assets";
import CourseSlider from "../CourseSlider/CourseSlider";
import "./Courses.scss";

const Courses = () => {
  return (
    <div className="courses">
      <div className="container">
        <div className="courses__content">
          <div className="content__bg">
            <img src={courseBg2} alt="article-bg-img" className="coursebg__1" />
            <img src={courseBg1} alt="article-bg-img" className="coursebg__2" />
          </div>
          <header className="content__header">
            <h3 className="header__title">Курси</h3>
            <Link to="/courses" className="header__more">
              Всі курси
            </Link>
          </header>
          <div className="course__slider">
            <CourseSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
