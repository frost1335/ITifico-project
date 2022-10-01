import React from "react";
import { FaHome } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CourseCard, Loader } from "../../../../components";
import { useTranslation } from "react-i18next";

import "./CoursesList.scss";
import { useGetCoursesQuery } from "../../../../services/courseApi";

const CoursesList = () => {
  const { t } = useTranslation();
  const { data: coursesList, isLoading } = useGetCoursesQuery();

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
                {t("header_nav_home")}
              </Link>
            </li>
            <li className="menu__item menu__item--active">
              <span className="item_arrow">
                <HiArrowRight />
              </span>
              <Link to="/courses" className="item__link">
                {t("header_nav_courses")}
              </Link>
            </li>
          </ul>
        </div>
        <div className="list__content">
          <div className="header__banner">
            <h1 className="banner__text">courses</h1>
          </div>
          <div className="list__header">
            <h1 className="header__title">{t("courses_title")}</h1>
          </div>
          {isLoading ? (
            <Loader />
          ) : coursesList?.data?.length ? (
            <div className="list__menu">
              {coursesList?.data?.map?.((course, index) => (
                <CourseCard key={index + "course"} course={course} />
              ))}
            </div>
          ) : (
            <p>Course not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
