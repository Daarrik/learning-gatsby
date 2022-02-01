import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageProvider";
import Layout from "../components/layout";
import Blob from "../components/blob";

const IndexPage = () => {
  // const { language } = useContext(LanguageContext); // language is undefined (??)

  return (
    // CAN'T HAVE LAYOUT AS PARENT. CONTEXT MUST BE PASSED DOWN VIA ROOT ELEMENT
    // STILL FINDING ROOT ELEMENT
    <Layout>
      <main className="main center">
        <Blob />
      </main>
    </Layout>
  );
};

export default IndexPage;
