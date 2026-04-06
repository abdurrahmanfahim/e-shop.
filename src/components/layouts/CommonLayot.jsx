import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../headers/Header";
import Footer from "../footer/Footer"

const CommonLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

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
