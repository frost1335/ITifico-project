import Parallax from "parallax-js";
import React, { useEffect } from "react";
import {
  prog3Background,
  prog3CH,
  prog3Cplus,
  prog3Css,
  prog3Dotline,
  prog3Flower,
  prog3Html,
  prog3Json,
  prog3Laptop,
  prog3Man,
  prog3Table,
  prog3Vector,
} from "../../../assets";

import './ProgrammingImg3.scss'

const ProgrammingImg3 = () => {
  useEffect(() => {
    const scene = document.getElementById("home-programming-scene3");
    const parallax = new Parallax(scene);

    return () => {
      parallax.disable();
    };
  });

  return (
    <div className="programming__img3">
      <div className="img__container">
        <div id="home-programming-scene3">
          <div className="layer" data-depth="0.2">
            <img
              src={prog3Background}
              alt="layer-img"
              className="prog3Background"
            />
          </div>
          <div className="layer" data-depth="0.6">
            <img src={prog3Flower} alt="layer-img" className="prog3Flower" />
          </div>
          <div className="layer" data-depth="0.43">
            <img src={prog3Man} alt="layer-img" className="prog3Man" />
          </div>
          <div className="layer" data-depth="0.28">
            <img src={prog3Dotline} alt="layer-img" className="prog3Dotline" />
          </div>
          <div className="layer" data-depth="0.43">
            <img src={prog3Json} alt="layer-img" className="prog3Json" />
          </div>
          <div className="layer" data-depth="0.58">
            <img src={prog3Html} alt="layer-img" className="prog3Html" />
          </div>
          <div className="layer" data-depth="0.37">
            <img src={prog3Cplus} alt="layer-img" className="prog3Cplus" />
          </div>
          <div className="layer" data-depth="0.36">
            <img src={prog3Css} alt="layer-img" className="prog3Css" />
          </div>
          <div className="layer" data-depth="0.45">
            <img src={prog3CH} alt="layer-img" className="prog3CH" />
          </div>
          <div className="layer" data-depth="0.5">
            <img src={prog3Table} alt="layer-img" className="prog3Table" />
          </div>
          <div className="layer" data-depth="0.48">
            <img src={prog3Laptop} alt="layer-img" className="prog3Laptop" />
          </div>
          <div className="layer" data-depth="0.37">
            <img src={prog3Vector} alt="layer-img" className="prog3Vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingImg3;
