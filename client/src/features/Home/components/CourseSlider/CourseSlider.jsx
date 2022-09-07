import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { heroCourse, newCourse } from "../../assets";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import {
  homeSlidesPerViewHomeLaptop,
  homeSlidesPerViewHomeMobile,
  homeSubCourseTextLaptop,
  homeSubCourseTextMobile,
  mobileMaxWidth,
  slideSpaceBetween,
  tabletMaxWidth,
} from "../../../../constants";

import "./CourseSlider.scss";
import { LeftArrowIcon, RightArrowIcon } from "../../../../components";

const CourseSlider = () => {
  const { t } = useTranslation();

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState("");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [substring, setSubstring] = useState(homeSubCourseTextLaptop);
  const [slidesPerView, setSlidesPerView] = useState(
    homeSlidesPerViewHomeLaptop
  );
  const [courses, setCourses] = useState([
    {
      icon: heroCourse,
      banner: "hero",
      bg: "#ccc1f6",
      title: t("home_courses_card1_title"),
      text: t("home_courses_card1_description"),
      link: {
        to: "#C#course",
        text: t("home_courses_card1_button"),
      },
    },
    {
      icon: newCourse,
      banner: "new",
      bg: "#e7eef3",
      title: t("home_courses_card2_title"),
      text: t("home_courses_card2_description"),
      link: {
        to: "#newcourse",
        text: t("home_courses_card2_button"),
      },
    },
  ]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth > mobileMaxWidth) {
      setSlidesPerView(homeSlidesPerViewHomeLaptop);
    } else {
      setSlidesPerView(homeSlidesPerViewHomeMobile);
    }

    if (windowWidth > tabletMaxWidth) {
      setSubstring(homeSubCourseTextLaptop);
    } else {
      setSubstring(homeSubCourseTextMobile);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, navigationPrevRef, navigationNextRef]);

  const onClickPrevButton = () => {
    setPrevDisabled(
      navigationPrevRef.current.classList.value === "swiper-button-disabled"
    );
    setNextDisabled(false);
  };

  const onClickNextButton = () => {
    setNextDisabled(
      navigationNextRef.current.classList.value === "swiper-button-disabled"
    );
    setPrevDisabled(false);
  };

  return (
    <div className="courseslider">
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{
          clickable: true,
        }}
        spaceBetween={slideSpaceBetween}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {courses.map((course, idx) => (
          <SwiperSlide key={idx + "article"}>
            <div className="course" style={{ background: course.bg }}>
              <div className="course__banner">
                <h2>{course.banner}</h2>
              </div>
              <div className="course__icon">
                <img src={course.icon} alt="course-icon" />
              </div>
              <h4 className="course__title">{course.title}</h4>
              <p className="course__text">
                {course.text.length > substring
                  ? course.text.substring(0, substring) + "..."
                  : course.text}
              </p>
              <div className="link__box">
                <Link className="box__link__link" to={course.link.to}>
                  {course.link.text}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper__pagination">
          <div ref={navigationPrevRef} onClick={onClickPrevButton}>
            <LeftArrowIcon disabled={prevDisabled} />
          </div>
          <div ref={navigationNextRef} onClick={onClickNextButton}>
            <RightArrowIcon disabled={nextDisabled} />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default CourseSlider;
