import React, { useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillEnvelopeFill, BsFillBellFill } from "react-icons/bs";
import { sendmail1, sendmail2 } from "../../assets";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./SendMail.scss";

const SendMail = () => {
  const { t } = useTranslation();

  const location = useLocation();

  useEffect(() => {
    const body = document.querySelector("body");

    if (location.state === "subscribe") {
      window.scrollTo({ top: body.clientHeight + 1500 });
    }
  }, [location]);

  return (
    <div className="sendmail">
      <div className="sendmail_imgbg">
        <img src={sendmail1} alt="sendmail-img" className="imgbg_1" />
      </div>
      <div className="container">
        <div className="sendmail__content">
          <div className="content__imgbg">
            <img src={sendmail2} alt="sendmail-img" className="imgbg_2" />
          </div>
          <h2 className="content__title">{t("home_sendmail_title")}</h2>
          <p className="content__text">{t("home_sendmail_description")}</p>
          <form className="content__form">
            <div className="input__group">
              <input type="text" placeholder={t("home_sendmail_name_input")} />
              <span className="input__icon">
                <FaUser />
              </span>
            </div>
            <div className="input__group">
              <input
                type="email"
                placeholder={t("home_sendmail_email_input")}
              />
              <span className="input__icon">
                <BsFillEnvelopeFill />
              </span>
            </div>
            <button>
              {t("home_sendmail_sub_button")} <BsFillBellFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
