import React from "react";

const LinkButton = ({ children, link = "" }) => {
  return (
    <div className="cursor-pointer rounded-md bg-blue-500 px-3 py-2 uppercase text-white">
      {children}
    </div>
  );
};

export default LinkButton;
