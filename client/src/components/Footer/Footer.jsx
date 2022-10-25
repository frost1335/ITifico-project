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
            <a
              href="https://www.linkedin.com/in/stanislav-zghurskyi-859288158/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
            <a href="https://t.me/stasoz" target="_blank" rel="noreferrer">
              Telegram
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=truestasoz@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Gmail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
