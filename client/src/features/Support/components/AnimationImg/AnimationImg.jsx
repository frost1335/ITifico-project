import Parallax from "parallax-js";
import React, { useEffect } from "react";
import {
  bigBox,
  bigHeart,
  box1,
  box2,
  box3,
  coins,
  man,
  woman,
  woman2,
} from "../../assets";

import './AnimationImg.scss'

const AnimationImg = () => {
  useEffect(() => {
    const scene = document.getElementById("support-main-scene");
    const parallax = new Parallax(scene);

    return () => {
      parallax.disable();
    };
  });

  return (
    <div className="animation__img">
      <div className="img__container">
        <div id="support-main-scene">
          <div data-depth="0.3" className="layer">
            <img className="bigBox" src={bigBox} alt="bigBox" />
          </div>
          <div data-depth="0.3" className="layer">
            <img className="box1" src={box1} alt="box1" />
          </div>
          <div data-depth="0.2" className="layer">
            <img className="box2" src={box2} alt="box2" />
          </div>
          <div data-depth="0.2" className="layer">
            <img className="box3" src={box3} alt="box3" />
          </div>
          <div data-depth="0.4" className="layer">
            <img className="coins" src={coins} alt="coins" />
          </div>
          <div data-depth="0.2" className="layer">
            <img className="bigHeart" src={bigHeart} alt="bigHeart" />
          </div>
          <div data-depth="0.38" className="layer">
            <img className="man" src={man} alt="man" />
          </div>
          <div data-depth="0.25" className="layer">
            <img className="woman" src={woman} alt="woman" />
          </div>
          <div data-depth="0.25" className="layer">
            <img className="woman2" src={woman2} alt="woman2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimationImg;
