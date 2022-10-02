import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("header_nav_home");
  }, [t]);

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
