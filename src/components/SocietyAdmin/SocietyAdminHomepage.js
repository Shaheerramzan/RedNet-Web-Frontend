import React from "react";
import { Container } from "react-bootstrap";

import Header from "../Common/Components/Header";
import HomePage from "../Common/Components/HomePage";

import "../Common/CSS/CommonClasses.css";
import "../Common/CSS/Homepage.css";

import ManageEntities from "../Common/Components/ManageEntities";
import Complains from "./Complaints";

class SocietyAdminHomepage extends React.Component {
  render() {
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="3" Name="Society Admin" />
        <HomePage component="Society Admin">
          <ManageEntities userType={1} />
          <Complains />
        </HomePage>
      </Container>
    );
  }
}

export default SocietyAdminHomepage;
