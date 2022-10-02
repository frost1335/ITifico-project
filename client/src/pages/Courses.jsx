import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { pageBg3 } from "../assets";
import { CoursesList } from "../features/Courses";
import Layout from "../layouts/Layout";

const Courses = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("header_nav_courses");
  }, [t]);


  return (
    <div className="courses__page">
      <div className="page__bgimages">
        <div className="bgimage1">
          <img src={pageBg3} alt="page-background" className="bg__img" />
        </div>
      </div>
      <Layout>
        <CoursesList />
      </Layout>
    </div>
  );
};

export default Courses;
