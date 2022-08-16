import React from "react";
import { Connect, Main } from "../features/About";
import Layout from "../layouts/Layout";

const About = () => {
  return (
    <Layout>
      <Main />
      <Connect />
    </Layout>
  );
};

export default About;
