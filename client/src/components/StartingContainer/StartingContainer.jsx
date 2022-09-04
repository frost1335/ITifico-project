import React from "react";
import Loader from "../Loader/Loader";
import "./StartingContainer.scss";

const StartingContainer = () => {
  return (
    <div className="starting__container">
      <Loader />
    </div>
  );
};

export default StartingContainer;
