import React from "react";
import { useState } from "react";
import { courseIcon } from "../../../../assets";
import { CourseCard } from "../../../../components";
import { useTranslation } from "react-i18next";

import "./Sidebar.scss";

const Sidebar = () => {
  const { t } = useTranslation();
  const [tags, setTags] = useState([
    {
      name: "Frontend",
      background: "#92E3A9",
    },
    {
      name: "Backend",
      background: "#A2D8FF",
    },
    {
      name: "C#",
      background: "#BEC5FF",
    },
    {
      name: "JavaScript",
      background: "#FFDD95",
    },
    {
      name: "Cloud",
      background: "#DDF1FF",
    },
    {
      name: "React",
      background: "#A3E8EC",
    },
    {
      name: "Self-education",
      background: "#FBA594",
    },
    {
      name: "Tips",
      background: "#FFD4BC",
    },
    {
      name: "Sql",
      background: "#A7BBD1",
    },
    {
      name: "Soft skills",
      background: "#F3A9E7",
    },
  ]);
  const [course, setCourse] = useState({
    icon: courseIcon,
    title: "C++ від нуля до героя",
    text: "Навчаємо веб програмування, створення ігор та розробки ПЗ. Проходьте курси, вирішуйте завдання, переглядайте новини та ставайте справжніми майстрами програмування!",
    background: "#FFB6B6",
  });

  return (
    <div className="blog__sidebar">
      <div className="sidebar__category">
        <h3 className="category__title">
          {t("blogdetail_sidebar_categories")}
        </h3>
        <div className="category__tags">
          {tags.length ? (
            tags.map((tag, idx) => (
              <div
                className="tag"
                key={idx + "tag"}
                style={{ background: tag.background }}
              >
                {tag.name}
              </div>
            ))
          ) : (
            <p>Tags not found</p>
          )}
        </div>
      </div>
      <div className="sidebar__course">
        <h3 className="course__title">{t("blogdetail_sidebar_category")}</h3>
        <div className="course__box">
          <CourseCard course={course} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
