import * as React from "react";
import Blob from "../components/blob";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <main className="center">
        <Blob />
      </main>
    </Layout>
  );
};

export default IndexPage;
