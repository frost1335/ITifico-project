import React from "react";
import { pageBg4 } from "../assets";
import Content from "../features/CourseDetail/containers/Content/Content";
import Layout from "../layouts/Layout";

const CourseDetail = () => {
  return (
    <div className="coursedetail__page">
      <Layout>
        <Content />
      </Layout>
      <div className="page__bgimages">
        <div className="container">
          <div className="bgimage1">
            <img src={pageBg4} alt="page-background" className="bg__img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
