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
import { LeftArrowIcon, Loader, RightArrowIcon } from "../../../../components";
import { useGetCoursesQuery } from "../../../../services/courseApi";
import { useSelector } from "react-redux";
import CourseCard from "./CourseCard";

const CourseSlider = () => {
  const { t } = useTranslation();
  const { data: courseList, isLoading } = useGetCoursesQuery();
  const { lng } = useSelector((state) => state.lngDetect);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState("");

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [substring, setSubstring] = useState(homeSubCourseTextLaptop);
  const [slidesPerView, setSlidesPerView] = useState(
    homeSlidesPerViewHomeLaptop
  );
  const [courses, setCourses] = useState([]);

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

  useEffect(() => {
    if (!isLoading) {
      let arr = courseList?.data.slice(0, 4);
      setCourses([...arr]);
    }
  }, [isLoading, courseList]);

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
        {isLoading ? (
          <Loader />
        ) : courses.length ? (
          <>
            {courses.map((course, idx) => (
              <SwiperSlide key={idx + "article"}>
                <CourseCard course={course} key={idx} />
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
          </>
        ) : (
          <p>There is no new courses yet</p>
        )}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
