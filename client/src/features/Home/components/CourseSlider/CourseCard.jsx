import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { defaultIcon } from "../../../../assets";
import { homeSubCourseTextLaptop } from "../../../../constants";
import { useImgExsist } from "../../../../hooks/useImgExsist";

const CourseCard = ({ course }) => {
  const iconExsist = useImgExsist(course?.icon);
  const { lng } = useSelector((state) => state.lngDetect);
  const { t } = useTranslation();
  const [substring, setSubstring] = useState(homeSubCourseTextLaptop);

  return (
    <div className="course" style={{ background: course?.background }}>
      <div className="course__banner">
        <h2>new</h2>
      </div>
      <div className="course__icon">
        <img
          src={
            iconExsist
              ? process.env.REACT_APP_BASE_URL + "/Uploads/" + course?.icon
              : defaultIcon
          }
          alt="course-icon"
        />
      </div>
      <h4 className="course__title">{course?.[lng]?.title}</h4>
      <p className="course__text">
        {course?.[lng]?.description.length > substring
          ? course?.[lng]?.description.substring(0, substring) + "..."
          : course?.[lng]?.description}
      </p>
      <div className="link__box">
        <Link className="box__link__link" to={`/courses/view/${course._id}`}>
          {t("courses_detail_more")}
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
