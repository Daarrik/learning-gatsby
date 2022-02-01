import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const ChngLang = () => {
  const { language, switchLang } = useContext(LanguageContext);

  return (
    <button className="lang-button" onClick={() => switchLang()}>
      {language.button}
    </button>
  );
};

export default ChngLang;
