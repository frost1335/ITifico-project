import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./CourseSlider.scss";

import { Pagination, Navigation } from "swiper";
import { useState } from "react";
import { heroBanner, heroCourse, newBanner, newCourse } from "../../assets";
import { Link } from "react-router-dom";

const CourseSlider = () => {
  const [courses, setCourses] = useState([
    {
      icon: heroCourse,
      banner: heroBanner,
      bg: "#ccc1f6",
      title: "C# від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      link: {
        to: "/course",
        text: "Детальніше",
      },
    },
    {
      icon: newCourse,
      banner: newBanner,
      bg: "#e7eef3",
      title: "Новий курс у розробці!",
      text: "Підписуйся, щоб не пропустити",
      link: {
        to: "/subscribe",
        text: "Підписатися",
      },
    },
    {
      icon: heroCourse,
      banner: heroBanner,
      bg: "#ccc1f6",
      title: "C# від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      link: {
        to: "/course",
        text: "Детальніше",
      },
    },
    {
      icon: newCourse,
      banner: newBanner,
      bg: "#e7eef3",
      title: "Новий курс у розробці!",
      text: "Підписуйся, щоб не пропустити",
      link: {
        to: "/subscribe",
        text: "Підписатися",
      },
    },
    {
      icon: heroCourse,
      banner: heroBanner,
      bg: "#ccc1f6",
      title: "C# від нуля до героя",
      text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
      link: {
        to: "/course",
        text: "Детальніше",
      },
    },
    {
      icon: newCourse,
      banner: newBanner,
      bg: "#e7eef3",
      title: "Новий курс у розробці!",
      text: "Підписуйся, щоб не пропустити",
      link: {
        to: "/subscribe",
        text: "Підписатися",
      },
    },
  ]);

  return (
    <div className="courseslider">
      <Swiper
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {courses.map((course, idx) => (
          <SwiperSlide key={idx + "article"}>
            <div className="course" style={{ background: course.bg }}>
              <div className="course__banner">
                <img src={course.banner} alt="course-banner" />
              </div>
              <div className="course__icon">
                <img src={course.icon} alt="course-icon" />
              </div>
              <h4 className="course__title">{course.title}</h4>
              <p className="course__text">{course.text}</p>
              <div className="link__box">
                <Link className="box__link__link" to={course.link.to}>
                  {course.link.text}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CourseSlider;
