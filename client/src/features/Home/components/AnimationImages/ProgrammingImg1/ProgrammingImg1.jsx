import Parallax from "parallax-js";
import React, { useEffect } from "react";
import {
  prog1Computer,
  prog1Computer2,
  prog1Css,
  prog1Flower,
  prog1Html,
  prog1Man,
  prog1Monitor,
  prog1Monitor2,
  prog1Mouse,
  prog1Php,
  prog1Screen1,
  prog1Screen2,
  prog1Screen3,
  prog1Screen4,
  prog1Screens,
  prog1Screw,
  prog1Table,
  prog1Vector,
} from "../../../assets";

import "./ProgrammingImg1.scss";

const ProgrammingImg1 = () => {
  useEffect(() => {
    const scene = document.getElementById("home-programming-scene1");
    const parallax = new Parallax(scene);

    return () => {
      parallax.disable();
    };
  });

  return (
    <div className="programming__img1">
      <div className="img__container">
        <div id="home-programming-scene1">
          <div className="layer" data-depth="0.31">
            <img src={prog1Screen1} alt="layer-img" className="prog1Screen1" />
          </div>
          <div className="layer" data-depth="0.55">
            <img src={prog1Screw} alt="layer-img" className="prog1Screw" />
          </div>
          <div className="layer" data-depth="0.33">
            <img src={prog1Screen2} alt="layer-img" className="prog1Screen2" />
          </div>
          <div className="layer" data-depth="0.52">
            <img src={prog1Screen3} alt="layer-img" className="prog1Screen3" />
          </div>
          <div className="layer" data-depth="0.45">
            <img src={prog1Vector} alt="layer-img" className="prog1Vector" />
          </div>
          <div className="layer" data-depth="0.44">
            <img src={prog1Screens} alt="layer-img" className="prog1Screens" />
          </div>
          <div className="layer" data-depth="0.38">
            <img src={prog1Php} alt="layer-img" className="prog1Php" />
          </div>
          <div className="layer" data-depth="0.4">
            <img src={prog1Html} alt="layer-img" className="prog1Html" />
          </div>
          <div className="layer" data-depth="0.45">
            <img src={prog1Screen4} alt="layer-img" className="prog1Screen4" />
          </div>
          <div className="layer" data-depth="0.43">
            <img src={prog1Css} alt="layer-img" className="prog1Css" />
          </div>
          <div className="layer" data-depth="0.55">
            <img src={prog1Man} alt="layer-img" className="prog1Man" />
          </div>
          <div className="layer" data-depth="0.48">
            <img src={prog1Flower} alt="layer-img" className="prog1Flower" />
          </div>
          <div className="layer" data-depth="0.5">
            <img src={prog1Monitor} alt="layer-img" className="prog1Monitor" />
          </div>
          <div className="layer" data-depth="0.38">
            <img
              src={prog1Computer}
              alt="layer-img"
              className="prog1Computer"
            />
          </div>
          <div className="layer" data-depth="0.5">
            <img src={prog1Mouse} alt="layer-img" className="prog1Mouse" />
          </div>
          <div className="layer" data-depth="0.36">
            <img
              src={prog1Computer2}
              alt="layer-img"
              className="prog1Computer2"
            />
          </div>
          <div className="layer" data-depth="0.58">
            <img
              src={prog1Monitor2}
              alt="layer-img"
              className="prog1Monitor2"
            />
          </div>
          <div className="layer" data-depth="0.6">
            <img src={prog1Table} alt="layer-img" className="prog1Table" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingImg1;
