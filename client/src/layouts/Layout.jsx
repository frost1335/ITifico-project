import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Footer, Navbar } from "../components";
import { layoutBg1 } from "../features/Home/assets";
import { layoutBg2 } from "../features/Home/assets";
import "./Layout.scss";

const Layout = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [layoutImg, setLayoutImg] = useState(layoutBg2);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log(windowWidth);

    if (windowWidth > 1697) {
      setLayoutImg(layoutBg2);
    } else if (windowWidth > 1229) {
      setLayoutImg(layoutBg1);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className="layout">
      <div className="layout__imgbg">
        <img src={layoutImg} alt="layout-img" className="imgbg_1" />
      </div>
      <div className="layout__navbar">
        <Navbar />
      </div>
      <div className="layout__main">{children}</div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
