import React from "react";
import Layout from "../layouts/Layout";
import { BlogArticles } from "../features/Blog";
import { pageBg1 } from "../assets";

const Blog = () => {
  return (
    <div className="blog__page">
      <div className="page__bgimages">
        <div className="bgimage1">
          <img src={pageBg1} alt="page-background" className="bg__img" />
        </div>
      </div>
      <Layout>
        <BlogArticles />
      </Layout>
    </div>
  );
};

export default Blog;
