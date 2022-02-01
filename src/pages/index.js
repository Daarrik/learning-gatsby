import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageProvider";
import Blob from "../components/blob";

const IndexPage = () => {
  const { language } = useContext(LanguageContext); // language is undefined (??)

  return (
    <main className="main center">
      <Blob />
      {language.main}
    </main>
  );
};

export default IndexPage;
