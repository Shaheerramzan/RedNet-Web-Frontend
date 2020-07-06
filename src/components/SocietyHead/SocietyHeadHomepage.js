import React from "react";
import Container from "react-bootstrap/Container";

import Header from "../Common/Components/Header";
import HomePage from "../Common/Components/HomePage";
import ManageEntities from "../Common/Components/ManageEntities";
import Complaints from "../SocietyAdmin/Complaints";

import "../Common/CSS/CommonClasses.css";
import "../Common/CSS/Homepage.css";
import {getData} from "../../actions";
import {connect} from "react-redux";

class SocietyHeadHomepage extends React.Component {
  personId;
  componentDidMount() {this.props.getData()}

  render() {
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage="3" Name="Society Head" />
        <HomePage component="Society Head">
          {this.props.data && <ManageEntities userType={2} societyHeadId={this.props.data.person.personId}/>}
          <Complaints />
        </HomePage>
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {data: state.login.data}

}

export default connect(mapStateToProps, {getData})(SocietyHeadHomepage);
