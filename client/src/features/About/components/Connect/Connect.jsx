import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";

import "./Connect.scss";

const Connect = () => {
  const { t } = useTranslation();

  return (
    <div className="about__connect">
      <div className="container">
        <div className="sendmail__content">
          <h2 className="content__title">{t("about_contact_title")}</h2>
          <form className="content__form">
            <div className="input__group">
              <input type="text" placeholder={t("about_input_name")} />
              <span className="input__icon">
                <FaUser />
              </span>
            </div>
            <div className="input__group">
              <input type="email" placeholder={t("about_input_email")} />
              <span className="input__icon">
                <BsFillEnvelopeFill />
              </span>
            </div>
            <button>{t("about_button_text")}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
