import "./Header.css";
import { Row, Col, Navbar } from "react-bootstrap";
import React from "react";

const HeaderLogo = () => {
  return (
    <Col className="header-left-text">
      <Navbar.Text className="white">RED</Navbar.Text>
      &nbsp;
      <Navbar.Text className="red">NET</Navbar.Text>
    </Col>
  );
};

const Header = ForHomepage => {
  if (ForHomepage.ForHomepage === true)
    return (
      <Row className="main-header">
        <HeaderLogo />
        <Col className="right">
          <Navbar.Text className="white header-right-text">
            Register New Society
          </Navbar.Text>
        </Col>
      </Row>
    );
  else
    return (
      <Row className="main-header">
        <HeaderLogo />
      </Row>
    );
};

export default Header;
