import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { GoogleAnalytics } from "./components";
import {
  Blog,
  BlogDetail,
  CourseDetail,
  Courses,
  Home,
  NotFound,
} from "./pages";

const App = () => {
  return (
    <>
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/view/:blogId" element={<BlogDetail />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/courses/view/:unitId/:lessonId"
          element={<CourseDetail />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
