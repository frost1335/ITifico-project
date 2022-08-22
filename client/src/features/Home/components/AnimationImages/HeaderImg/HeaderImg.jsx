import React, { useEffect } from "react";
import {
  animBigBackground,
  animBracket1,
  animBracket2,
  animDotBorder,
  animMan,
  animScreenImg,
  animScreenImgs2,
  animShadowImg,
} from "../../../assets";
import Parallax from "parallax-js";

import "./HeaderImg.scss";

const HeaderImg = () => {
  useEffect(() => {
    const scene = document.getElementById("home-header-scene");
    const parallax = new Parallax(scene);

    return () => {
      parallax.disable();
    };
  });

  return (
    <div className="header__img">
      <div className="img__container">
        <div id="home-header-scene">
          <div className="layer" data-depth="0.4">
            <img src={animBracket2} alt="layer-img" className="bracket2" />
          </div>
          <div className="layer" data-depth="0.45">
            <img src={animBracket1} alt="layer-img" className="bracket1" />
          </div>
          <div className="layer" data-depth="0">
            <img
              src={animBigBackground}
              alt="layer-img"
              className="bigBackground"
            />
          </div>
          <div className="layer" data-depth="0.35">
            <img src={animShadowImg} alt="layer-img" className="shadowImg" />
          </div>
          <div className="layer" data-depth="0.2">
            <img src={animDotBorder} alt="layer-img" className="dotBorder" />
          </div>

          <div className="layer" data-depth="0.35">
            <img src={animScreenImg} alt="layer-img" className="screenImg" />
          </div>
          <div className="layer" data-depth="0.48">
            <img
              src={animScreenImgs2}
              alt="layer-img"
              className="screenImgs2"
            />
          </div>
          <div className="layer" data-depth="0.28">
            <img src={animMan} alt="layer-img" className="man" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
