import React from "react";
import Layout from "../layouts/Layout";
import { Main } from "../features/Support";
import { pageBg5 } from "../assets";

const Support = () => {
  return (
    <div className="support__page">
      <div className="page__bgimages">
        <div className="bgimage1">
          <img src={pageBg5} alt="page-background" className="bg__img" />
        </div>
      </div>
      <Layout>
        <Main />
      </Layout>
    </div>
  );
};

export default Support;
