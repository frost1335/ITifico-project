import React from "react";
import { Articles, Header } from "../features/Home";
import Layout from "../layouts/Layout";

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Articles />
      </Layout>
    </>
  );
};

export default Home;
