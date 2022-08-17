import React from "react";
import { CoursesList } from "../features/Courses";
import Layout from "../layouts/Layout";

const Courses = () => {
  return (
    <>
      <Layout>
        <CoursesList />
      </Layout>
    </>
  );
};

export default Courses;
