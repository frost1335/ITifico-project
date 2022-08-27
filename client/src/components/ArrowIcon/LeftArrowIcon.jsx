import React from "react";
import { GoTriangleLeft } from "react-icons/go";

import "./ArrowIcon.scss";

const LeftArrowIcon = () => {
  return (
    <div className="arrow__icon arrow__icon--left">
      <GoTriangleLeft />
    </div>
  );
};

export default LeftArrowIcon;
