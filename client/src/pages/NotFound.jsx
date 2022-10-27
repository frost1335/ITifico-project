import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <button onClick={() => navigate(-1)}>Back to site</button>
    </div>
  );
};

export default NotFound;
