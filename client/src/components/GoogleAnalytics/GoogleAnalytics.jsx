import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleAnalytics = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const gtag = window.gtag;

    if (typeof gtag === "function") {
      gtag("config", "G-Q00TCSHTYC", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
      });
    }
  }, [location, navigate]);

  return null;
};

export default GoogleAnalytics;
