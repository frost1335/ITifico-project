import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const Content = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="content__main"></div>
        <div className="content__sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Content;
