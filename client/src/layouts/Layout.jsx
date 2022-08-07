import React from "react";
import { Footer, Navbar } from "../components";
import { headerBg2 } from "../features/Home/assets";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="layout__imgbg">
        <img src={headerBg2} alt="layout-img" className="imgbg_1" />
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
