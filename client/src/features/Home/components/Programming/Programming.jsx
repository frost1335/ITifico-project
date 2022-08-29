import React, { useEffect, useState } from "react";
import { mobileMaxWidth } from "../../../../constants";
import { useTranslation } from "react-i18next";

import ProgrammingImg1 from "../AnimationImages/ProgrammingImg1/ProgrammingImg1";
import ProgrammingImg2 from "../AnimationImages/ProgrammingImg2/ProgrammingImg2";
import ProgrammingImg3 from "../AnimationImages/ProgrammingImg3/ProgrammingImg3";
import ProgrammingSlider from "./ProgrammingSlider/ProgrammingSlider";

import "./Programming.scss";

const Programming = () => {
  const { t } = useTranslation();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [progrMob, setProgMob] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    if (windowWidth > mobileMaxWidth) {
      setProgMob(false);
    } else {
      setProgMob(true);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="container">
      <div className="programming">
        <h3 className="programming__title">{t("home_programming_title")}</h3>
        {progrMob ? (
          <ProgrammingSlider />
        ) : (
          <div className="programming__content">
            <div className="content__block">
              <ProgrammingImg1 />
              <h4 className="block__text">{t("home_programming_content1")}</h4>
            </div>
            <div className="content__block">
              <ProgrammingImg2 />
              <h4 className="block__text">{t("home_programming_content2")}</h4>
            </div>
            <div className="content__block">
              <ProgrammingImg3 />
              <h4 className="block__text">{t("home_programming_content3")}</h4>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programming;
