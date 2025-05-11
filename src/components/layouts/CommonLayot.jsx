import { Outlet } from "react-router-dom";
import Container from "./Container";
import Header from "../headers/Header";

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
      <Container>
        <div>Footer</div>
      </Container>
    </>
  );
};

export default CommonLayout;
