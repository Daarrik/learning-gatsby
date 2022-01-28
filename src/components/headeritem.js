import React from "react";

const HeaderItem = ({ url, icon }) => {
  return (
    <a className="center" href={url} target="_blank" rel="noopener noreferrer">
      {icon}
    </a>
  );
};

export default HeaderItem;
