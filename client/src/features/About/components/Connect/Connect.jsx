import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Connect.scss";

const Connect = () => {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let BOT_URL = `https://api.telegram.org/bot${process.env.REACT_APP_BOT_ID}/sendMessage`;
    let message = `<b>User for connection</b>\n`;
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
    <div className="about__connect">
      <div className="container">
        <div className="sendmail__content">
          <h2 className="content__title">{t("about_contact_title")}</h2>
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
          <form onSubmit={onSubmitHandler} className="content__form">
            <div className="input__group">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder={t("about_input_name")}
              />
              <span className="input__icon">
                <FaUser />
              </span>
            </div>
            <div className="input__group">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder={t("about_input_email")}
              />
              <span className="input__icon">
                <BsFillEnvelopeFill />
              </span>
            </div>
            <button disabled={!name.trim().length || !email.trim().length}>
              {t("about_button_text")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
