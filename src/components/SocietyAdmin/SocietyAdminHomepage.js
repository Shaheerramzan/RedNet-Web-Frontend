import React from "react";
import { connect } from "react-redux";
import { getDonors } from "../../actions";
import { Container } from "react-bootstrap";

import Header from "../Common/Components/Header";
import HomePage from "../Common/Components/HomePage";

import "../Common/CSS/CommonClasses.css";
import "../Common/CSS/Homepage.css";

class SocietyAdminHomepage extends React.Component {
  componentDidMount() {
    //this.props.getDonors();
  }

  render() {
    return (
      <Container fluid className="bg-img">
        <Header ForHomepage={false} Name="Society Admin" />
        <HomePage component="Society Admin" Name="Shaheer"/>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { donors: state.donors };
};

export default connect(mapStateToProps, { getDonors })(SocietyAdminHomepage);
