import React from "react";
import { Link } from "react-router-dom";
import { courseBg1, courseBg2 } from "../../assets";
import CourseSlider from "../CourseSlider/CourseSlider";
import { useTranslation } from "react-i18next";

import "./Courses.scss";

const Courses = () => {
  const { t } = useTranslation();

  return (
    <div className="courses">
      <div className="container">
        <div className="courses__content">
          <div className="content__bg">
            <img src={courseBg2} alt="article-bg-img" className="coursebg__1" />
            <img src={courseBg1} alt="article-bg-img" className="coursebg__2" />
          </div>
          <header className="content__header">
            <h3 className="header__title">{t("home_courses_title")}</h3>
            <Link to="/courses" className="header__more">
              {t("home_courses_button")}
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
