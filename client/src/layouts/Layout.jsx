import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Footer, Navbar } from "../components";
import { laptopMaxWidth, tabletMaxWidth } from "../constants";
import { layoutBg1 } from "../features/Home/assets";
import { layoutBg2 } from "../features/Home/assets";
import "./Layout.scss";

const Layout = ({ children, page }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [layoutImg, setLayoutImg] = useState(layoutBg1);
  const layout = useRef(null);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (windowWidth > laptopMaxWidth) {
      setLayoutImg(layoutBg1);
    } else if (windowWidth > tabletMaxWidth) {
      setLayoutImg(layoutBg2);
    }

    if (page === "course_detail") layout.current.style.overflow = "unset";
    else layout.current.style.overflow = "hidden";

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth, layout, page]);

  return (
    <div className="layout" ref={layout}>
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
