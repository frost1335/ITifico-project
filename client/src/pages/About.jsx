import React from "react";
import { pageBg1 } from "../assets";
import { Connect, Main } from "../features/About";
import Layout from "../layouts/Layout";

const About = () => {
  return (
    <div className="about__page">
      <div className="page__bgimages">
        <div className="bgimage1">
          <img src={pageBg1} alt="page-background" className="bg__img" />
        </div>
      </div>
      <Layout>
        <Main />
        <Connect />
      </Layout>
    </div>
  );
};

export default About;
