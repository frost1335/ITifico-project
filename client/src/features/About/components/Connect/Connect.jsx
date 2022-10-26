import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Connect.scss";
import { createControl, validate, validateForm } from "../../../../utils/form";
import { Input } from "../../../../components";

const Connect = () => {
  const { t } = useTranslation();

  const [connectData, setConnectData] = useState({
    isFormValid: false,
    formControls: {
      name: createControl(
        {
          type: "text",
          placeholder: t("about_input_name"),
          errorMessage: t("home_sendmail_name_validate"),
          successMessage: t("home_sendmail_name_success"),
        },
        { required: true }
      ),
      email: createControl(
        {
          type: "email",
          placeholder: t("about_input_email"),
          errorMessage: t("home_sendmail_email_validate"),
          successMessage: t("home_sendmail_email_success"),
        },
        { required: true, email: true }
      ),
    },
  });

  const onChangeHandler = (event, controlName) => {
    const formControls = { ...connectData.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    setConnectData({ formControls, isFormValid: validateForm(formControls) });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    let BOT_URL = `https://api.telegram.org/bot${process.env.REACT_APP_BOT_ID}/sendMessage`;
    let message = `<b>User for connection</b>\n`;
    message += `<b>User name: </b> <i>${connectData.formControls.name.value}</i>\n`;
    message += `<b>User email: </b> <i>${connectData.formControls.email.value}</i>`;

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
        setConnectData({
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
        setConnectData({
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
            <Input
              {...connectData.formControls.name}
              shouldValidate={!!connectData.formControls.name.validation}
              onChange={(event) => onChangeHandler(event, "name")}
              icon={<FaUser />}
            />
            <Input
              {...connectData.formControls.email}
              shouldValidate={!!connectData.formControls.email.validation}
              onChange={(event) => onChangeHandler(event, "email")}
              icon={<BsFillEnvelopeFill />}
            />
            <button disabled={!connectData.isFormValid}>
              {t("about_button_text")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
