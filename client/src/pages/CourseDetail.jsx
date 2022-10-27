import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { pageBg4 } from "../assets";
import Content from "../features/CourseDetail/containers/Content/Content";
import Layout from "../layouts/Layout";

const CourseDetail = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("navbar_link_courses");
  }, [t]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="coursedetail__page">
      <Layout page={"course_detail"}>
        <Content />
      </Layout>
      <div className="page__bgimages">
        <div className="bgimage1">
          <img src={pageBg4} alt="page-background" className="bg__img" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
