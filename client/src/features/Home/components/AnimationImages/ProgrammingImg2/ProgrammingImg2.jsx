import Parallax from "parallax-js";
import React, { useEffect } from "react";
import {
  prog2Angular,
  prog2JSC,
  prog2Laptop,
  prog2Man,
  prog2Plant1,
  prog2Plant2,
  prog2React,
  prog2Screen,
  prog2Screws1,
  prog2Screws2,
  prog2Vector,
  prog2Woman,
} from "../../../assets";

import "./ProgrammingImg2.scss";

const ProgrammingImg2 = () => {
  useEffect(() => {
    const scene = document.getElementById("home-programming-scene2");
    const parallax = new Parallax(scene);

    return () => {
      parallax.disable();
    };
  });

  return (
    <div className="programming__img2">
      <div className="img__container">
        <div id="home-programming-scene2">
          <div className="layer" data-depth="0.41">
            <img src={prog2Screws1} alt="layer-img" className="prog2Screws1" />
          </div>
          <div className="layer" data-depth="0.45">
            <img src={prog2Screws2} alt="layer-img" className="prog2Screws2" />
          </div>
          <div className="layer" data-depth="0.38">
            <img src={prog2JSC} alt="layer-img" className="prog2JSC" />
          </div>
          <div className="layer" data-depth="0.48">
            <img src={prog2Angular} alt="layer-img" className="prog2Angular" />
          </div>
          <div className="layer" data-depth="0.35">
            <img src={prog2Screen} alt="layer-img" className="prog2Screen" />
          </div>
          <div className="layer" data-depth="0.58">
            <img src={prog2React} alt="layer-img" className="prog2React" />
          </div>
          <div className="layer" data-depth="0.6">
            <img src={prog2Laptop} alt="layer-img" className="prog2Laptop" />
          </div>
          <div className="layer" data-depth="0.47">
            <img src={prog2Vector} alt="layer-img" className="prog2Vector" />
          </div>
          <div className="layer" data-depth="0.52">
            <img src={prog2Woman} alt="layer-img" className="prog2Woman" />
          </div>
          <div className="layer" data-depth="0.47">
            <img src={prog2Man} alt="layer-img" className="prog2Man" />
          </div>
          <div className="layer" data-depth="0.38">
            <img src={prog2Plant1} alt="layer-img" className="prog2Plant1" />
          </div>
          <div className="layer" data-depth="0.43">
            <img src={prog2Plant2} alt="layer-img" className="prog2Plant2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingImg2;
