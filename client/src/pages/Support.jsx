import React, { useEffect } from "react";
import Layout from "../layouts/Layout";
import { Main } from "../features/Support";
import { pageBg5 } from "../assets";
import { useTranslation } from "react-i18next";

const Support = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("navbar_link_donation");
  }, [t]);

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
