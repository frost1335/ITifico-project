import React from "react";
import { pageBg1, pageBg2 } from "../assets";
import { Content } from "../features/BlogDetail";
import Layout from "../layouts/Layout";

const BlogDetail = () => {
  return (
    <Layout>
      <div className="blogdetail__page">
        <div className="page__bgimages">
          <div className="bgimage1">
            <img src={pageBg1} alt="page-background" className="bg__img" />
          </div>
          <div className="bgimage2">
            <img src={pageBg2} alt="page-background" className="bg__img" />
          </div>
        </div>
        <Content />
      </div>
    </Layout>
  );
};

export default BlogDetail;
