import React from "react";

import "./MenuBlock.scss";

const MenuBlock = () => {
  return (
    <div className="menu__block">
      <h2 className="menu__title">Які можуть виникнути проблеми?</h2>
      <ul className="menu__list">
        <li className="list__item">
          Ідейні міркування вищого порядку, а також подальший розвиток
        </li>
        <li className="list__item">
          Різних форм діяльності забезпечує широкому колу (фахівців) участь у
          формуванні позицій,
        </li>
        <li className="list__item">
          Займаних учасниками щодо поставлених завдань.
        </li>
        <li className="list__item">
          Завдання організації, особливо ж консультація з широким активом є
          цікавий експеримент перевірки
        </li>
      </ul>
    </div>
  );
};

export default MenuBlock;
