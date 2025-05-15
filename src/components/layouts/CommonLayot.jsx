import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "../headers/Header";
import Footer from "../footer/Footer"

const CommonLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Outlet */}
        <Outlet />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CommonLayout;
