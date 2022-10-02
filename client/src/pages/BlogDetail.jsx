import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { pageBg1, pageBg2 } from "../assets";
import { Content } from "../features/BlogDetail";
import Layout from "../layouts/Layout";
import { useEditArticleViewMutation } from "../services/articleApi";

const BlogDetail = () => {
  const { blogId } = useParams();
  const { t } = useTranslation();
  const [editArticleView] = useEditArticleViewMutation();

  useEffect(() => {
    editArticleView({ viewed: true, _id: blogId });
  }, [blogId]);

  useEffect(() => {
    document.title = t("header_nav_blog");
  }, [t]);

  return (
    <Layout page="blog_detail">
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
