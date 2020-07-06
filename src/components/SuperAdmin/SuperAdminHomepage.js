import React from "react";
import { Container } from "react-bootstrap";

import Header from "../Common/Components/Header";
import HomePage from "../Common/Components/HomePage";

import "../Common/CSS/CommonClasses.css";
import "../Common/CSS/Homepage.css";
import ManageEntities from "../Common/Components/ManageEntities";
import Complaints from "../SocietyAdmin/Complaints";

class SuperAdminHomepage extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="3" Name="Super Admin" />
        <HomePage component="Super Admin">
          <ManageEntities userType={3} />
          <ManageEntities userType={3} Super={true} />
          <Complaints />
        </HomePage>
      </Container>
    );
  }
}

export default SuperAdminHomepage;
