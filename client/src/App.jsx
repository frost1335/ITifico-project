import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { Blog, Home, NotFound } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
