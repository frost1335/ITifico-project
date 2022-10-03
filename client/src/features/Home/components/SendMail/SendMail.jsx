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
import { createControl, validate, validateForm } from "../../../../utils/form";
import { Input } from "../../../../components";

const SendMail = () => {
  const { t } = useTranslation();
  const [sendData, setSendData] = useState({
    isFormValid: false,
    formControls: {
      name: createControl(
        {
          type: "text",
          placeholder: t("home_sendmail_name_input"),
          errorMessage: t("home_sendmail_name_validate"),
          successMessage: t("home_sendmail_name_success"),
        },
        { required: true }
      ),
      email: createControl(
        {
          type: "email",
          placeholder: t("home_sendmail_email_input"),
          errorMessage: t("home_sendmail_email_validate"),
          successMessage: t("home_sendmail_email_success"),
        },
        { required: true, email: true }
      ),
    },
  });

  const location = useLocation();

  useEffect(() => {
    const body = document.querySelector("body");

    if (location.state === "subscribe") {
      window.scrollTo({ top: body.clientHeight + 1500 });
    }
  }, [location]);

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...sendData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    setSendData({ formControls, isFormValid: validateForm(formControls) });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let BOT_URL = `https://api.telegram.org/bot${process.env.REACT_APP_BOT_ID}/sendMessage`;
    let message = `<b>User for subscription</b>\n`;
    message += `<b>User name: </b> <i>${sendData.formControls.name.value}</i>\n`;
    message += `<b>User email: </b> <i>${sendData.formControls.email.value}</i>`;

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
        setSendData({
          isFormValid: false,
          formControls: {
            name: createControl(
              {
                type: "text",
                placeholder: t("home_sendmail_name_input"),
                errorMessage: t("home_sendmail_name_validate"),
                successMessage: t("home_sendmail_name_success"),
              },
              { required: true }
            ),
            email: createControl(
              {
                type: "email",
                placeholder: t("home_sendmail_email_input"),
                errorMessage: t("home_sendmail_email_validate"),
                successMessage: t("home_sendmail_email_success"),
              },
              { required: true, email: true }
            ),
          },
        });
        toast.success(t("home_sendmail_message_sent"));
      },
      (error) => {
        setSendData({
          isFormValid: false,
          formControls: {
            name: createControl(
              {
                type: "text",
                placeholder: t("home_sendmail_name_input"),
                errorMessage: t("home_sendmail_name_validate"),
                successMessage: t("home_sendmail_name_success"),
              },
              { required: true }
            ),
            email: createControl(
              {
                type: "email",
                placeholder: t("home_sendmail_email_input"),
                errorMessage: t("home_sendmail_email_validate"),
                successMessage: t("home_sendmail_email_success"),
              },
              { required: true, email: true }
            ),
          },
        });
        toast.error(t("home_sendmail_message_not_sent"));
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
            <Input
              {...sendData.formControls.name}
              shouldValidate={!!sendData.formControls.name.validation}
              onChange={(event) => onChangeHandler(event, "name")}
              icon={<FaUser />}
            />
            <Input
              {...sendData.formControls.email}
              shouldValidate={!!sendData.formControls.email.validation}
              onChange={(event) => onChangeHandler(event, "email")}
              icon={<BsFillEnvelopeFill />}
            />
            <button type="submit" disabled={!sendData.isFormValid}>
              {t("home_sendmail_sub_button")} <BsFillBellFill />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SendMail;
