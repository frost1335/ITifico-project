import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import { BlogArticles } from "../features/Blog";
import { pageBg1 } from "../assets";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("header_nav_blog");
  }, [t]);

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
