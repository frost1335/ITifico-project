import React from "react";
import { Articles, Courses, Header, Programming } from "../features/Home";
import Layout from "../layouts/Layout";
import "./style.scss";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Articles />
        <Courses />
        <Programming />
      </Layout>
    </>
  );
};

export default Home;
