import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { GoogleAnalytics } from "./components";
import {
  About,
  Blog,
  BlogDetail,
  CourseDetail,
  Courses,
  Home,
  NotFound,
  Support,
} from "./pages";

import "./utils/i18next";

const App = () => {
  return (
    <>
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/view/:blogId" element={<BlogDetail />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/view/:courseId" element={<CourseDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
