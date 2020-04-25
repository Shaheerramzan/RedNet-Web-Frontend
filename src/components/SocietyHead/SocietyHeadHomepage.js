import React from "react";
import { Container } from "react-bootstrap";

import Header from "../Common/Components/Header";
import HomePage from "../Common/Components/HomePage";

import "../Common/CSS/CommonClasses.css";
import "../Common/CSS/Homepage.css";

class SocietyHeadHomepage extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="3" Name="Society Head" />
        <HomePage component="Society Head" Name="Shaheer"/>
      </Container>
    );
  }
}

export default SocietyHeadHomepage;
