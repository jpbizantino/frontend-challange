import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { SpinnerLoader } from "../components";

export const AppLayout = ({ children }) => {
  return (
    <>
      <SpinnerLoader />
      <Navbar expand="lg" className="navbar">
        <Container className="navbar-text">React Test App</Container>
      </Navbar>
      {children}
    </>
  );
};
