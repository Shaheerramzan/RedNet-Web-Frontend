import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Header from "./Header";
import "./LoginHomepage.css";

const BloodDrop = ({ text, link }) => {
  return (
    <Col className="img-div">
      <Container className="blood-img">
        <Link to={{pathname:`${link}/Login`, state:{text}}}>
          <div className="blood-text-div">
            <span className="white blood-text-span">{text}</span>
          </div>
        </Link>
      </Container>
    </Col>
  );
};

class LoginHomepage extends React.Component {
  render() {
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage={true} />
        <Row>
          <BloodDrop text="Society Admin" link="society-admin" />
          <BloodDrop text="Society Head" link="society-head" />
          <BloodDrop text="Super Admin" link="super-admin" />
        </Row>
      </Container>
    );
  }
}

export default LoginHomepage;
