import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

import "./Content.scss";

const Content = () => {
  const [course, setCourse] = useState([
    {
        
    },
  ]);

  return (
    <div className="container">
      <div className="content">
        <div className="content__sidebar">
          <Sidebar />
        </div>
        <div className="content__main"></div>
      </div>
    </div>
  );
};

export default Content;
