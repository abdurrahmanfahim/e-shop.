import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "../headers/Header";
import Footer from "../Footer";

const CommonLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Outlet */}
      <Container>
        <Outlet />
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CommonLayout;
