import React from "react";
import { pageBg4 } from "../assets";
import Content from "../features/CourseDetail/containers/Content/Content";
import Layout from "../layouts/Layout";

const CourseDetail = () => {
  return (
    <div className="coursedetail__page">
      <div className="page__bgimages">
        <div className="bgimage1">
          <img src={pageBg4} alt="page-background" className="bg__img" />
        </div>
      </div>
      <Layout>
        <Content />
      </Layout>
    </div>
  );
};

export default CourseDetail;
