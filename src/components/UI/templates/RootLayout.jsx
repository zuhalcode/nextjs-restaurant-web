import Footer from "@components/home/templates/Footer";
import React from "react";
import Navbar from "../organisms/Navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
