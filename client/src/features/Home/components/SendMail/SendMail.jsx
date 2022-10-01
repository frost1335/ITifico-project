import React, { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillEnvelopeFill, BsFillBellFill } from "react-icons/bs";
import { sendmail1, sendmail2 } from "../../assets";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./SendMail.scss";
import { useState } from "react";

const SendMail = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const location = useLocation();

  useEffect(() => {
    const body = document.querySelector("body");

    if (location.state === "subscribe") {
      window.scrollTo({ top: body.clientHeight + 1500 });
    }
  }, [location]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let BOT_URL = `https://api.telegram.org/bot${process.env.REACT_APP_BOT_ID}/sendMessage`;
    let message = `<b>User for subscription</b>\n`;
    message += `<b>User name: </b> <i>${name}</i>\n`;
    message += `<b>User email: </b> <i>${email}</i>`;

    await fetch(BOT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: process.env.REACT_APP_CHAT_ID,
        parse_mode: "html",
        text: message,
      }),
    }).then(
      (success) => {
        setName("");
        setEmail("");
        toast.success("Message sent");
      },
      (error) => {
        setName("");
        setEmail("");
        toast.error("Message not sended");
      }
    );
  };

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
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
          <form className="content__form" onSubmit={onSubmitHandler}>
            <div className="input__group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("home_sendmail_name_input")}
              />
              <span className="input__icon">
                <FaUser />
              </span>
            </div>
            <div className="input__group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("home_sendmail_email_input")}
              />
              <span className="input__icon">
                <BsFillEnvelopeFill />
              </span>
            </div>
            <button
              type="submit"
              disabled={!name.trim().length || !email.trim().length}
            >
              {t("home_sendmail_sub_button")} <BsFillBellFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
