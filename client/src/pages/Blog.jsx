import React from "react";
import Layout from "../layouts/Layout";
import { BlogArticles } from "../features/Blog";

const Blog = () => {
  return (
    <Layout banner="Blog">
      <BlogArticles />
    </Layout>
  );
};

export default Blog;
