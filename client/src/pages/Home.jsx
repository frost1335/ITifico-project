import React from "react";
import {
  Articles,
  Courses,
  Header,
  Programming,
  SendMail,
} from "../features/Home";
import Layout from "../layouts/Layout";
import "./style.scss";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Articles />
      <Courses />
      <Programming />
      <SendMail />
    </Layout>
  );
};

export default Home;
