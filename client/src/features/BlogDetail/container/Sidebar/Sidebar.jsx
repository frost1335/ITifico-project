import React, { useEffect } from "react";
import { useState } from "react";
import { CourseCard, Loader, Tag } from "../../../../components";
import { useTranslation } from "react-i18next";

import "./Sidebar.scss";
import { useGetCoursesQuery } from "../../../../services/courseApi";
import { useGetTagsQuery } from "../../../../services/tagApi";

const Sidebar = () => {
  const { t } = useTranslation();
  const { data: tags, isLoading: loadingTags } = useGetTagsQuery();
  const { data: courses, isLoading: loadingCourse } = useGetCoursesQuery();
  const [course, setCourse] = useState({});

  useEffect(() => {
    if (!loadingCourse && courses?.data?.length) {
      let randomCourse =
        courses?.data?.[Math.floor(Math.random() * courses?.data?.length)];
      setCourse(randomCourse);
    }
  }, [loadingCourse, courses]);

  return (
    <div className="blog__sidebar">
      <div className="sidebar__content">
        <div className="sidebar__category">
          <h3 className="category__title">
            {t("blogdetail_sidebar_categories")}
          </h3>
          <div className="category__tags">
            {loadingTags ? (
              <Loader />
            ) : tags?.data?.length ? (
              tags?.data?.map((tag, idx) => <Tag tag={tag} key={"teg" + idx} />)
            ) : (
              <p className="empty__message">{t("tags_empty_message")}</p>
            )}
          </div>
        </div>
        <div className="sidebar__course">
          <h3 className="course__title">{t("blogdetail_sidebar_category")}</h3>
          <div className="course__box">
            {loadingCourse ? (
              <Loader />
            ) : courses?.data?.length ? (
              <CourseCard course={course} />
            ) : (
              <p className="empty__message">{t("loading_course_message")}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
