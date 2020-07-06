import React from "react";
import Container from "react-bootstrap/Container";

import Header from "../Common/Components/Header";
import HomePage from "../Common/Components/HomePage";

import "../Common/CSS/CommonClasses.css";
import "../Common/CSS/Homepage.css";

import ManageEntities from "../Common/Components/ManageEntities";
import Complains from "./Complaints";
import {connect} from "react-redux";
import {getData} from "../../actions";

class SocietyAdminHomepage extends React.Component {

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="3" Name="Society Admin" />
        <HomePage component="Society Admin">
          {this.props.data && <ManageEntities userType={1} societyId={this.props.data.societyId}/>}
          <Complains />
        </HomePage>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {data: state.login.data}
}

export default connect(mapStateToProps, {getData})(SocietyAdminHomepage);
