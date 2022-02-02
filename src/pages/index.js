import React, { useContext } from "react";
import { LanguageContext } from "../components/LanguageProvider";
import Blob from "../components/Blob";

const IndexPage = () => {
  const { language } = useContext(LanguageContext); // language is undefined (??)

  return (
    <main className="main">
      <section className="center">
        <button>does nothing</button>
      </section>
      <section className="center">
        <h1 className="name">{language.main}</h1>
      </section>
    </main>
  );
};

export default IndexPage;
