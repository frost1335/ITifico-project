import React from "react";
import { FaUser } from "react-icons/fa";
import { BsFillEnvelopeFill } from "react-icons/bs";

import "./Connect.scss";

const Connect = () => {
  return (
    <div className="about__connect">
      <div className="container">
        <div className="sendmail__content">
          <h2 className="content__title">Зв'яжіться зі мною</h2>
          <form className="content__form">
            <div className="input__group">
              <input type="text" placeholder="Повне ім’я" />
              <span className="input__icon">
                <FaUser />
              </span>
            </div>
            <div className="input__group">
              <input type="email" placeholder="Ваша Email адреса" />
              <span className="input__icon">
                <BsFillEnvelopeFill />
              </span>
            </div>
            <button>Зв’язатися</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Connect;
