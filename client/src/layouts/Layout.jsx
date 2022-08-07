import React from "react";
import { Footer, Navbar } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="layout">
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
