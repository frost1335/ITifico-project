import React from "react";
import Logo from "../Logo/Logo";
import "./StartingContainer.scss";

const StartingContainer = () => {
  return (
    <div className="starting__container">
      <div className="starting__box">
        <div className="starting__icon">
          <Logo />
        </div>
        <div className="starting__loader">
          <div className="loadingio-spinner-double-ring-j27it8otcwg">
            <div className="ldio-61cy4mfdqnj">
              <div />
              <div />
              <div>
                <div />
              </div>
              <div>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartingContainer;
