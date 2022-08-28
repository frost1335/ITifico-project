import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="content__left">
            <p>Made with ❤️ by Stanislav Zghurskyi ©2022 </p>
          </div>
          <div className="content__right">
            <a href="#Linkedin">Linkedin</a>
            <a href="#Telegram">Telegram</a>
            <a href="#Gmail">Gmail</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
